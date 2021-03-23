import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  private token : string = null;

  constructor(private router : Router) {}

  registerUser(email: string, password: string) {
    firebase.default
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((response) => console.log('FIREBASE RESPONSE', response))
      .catch((err) => console.log(err));
  }

  loginUser(email : string, password : string) {
    firebase.default
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(response => {
        firebase.default.auth().currentUser.getIdToken()
          .then(token => {
            this.token = token;
            // localStorage.setItem("token", token);
            // const theToken = localStorage.getItem("token")
            // console.log("The Token - ", theToken);
            this.router.navigate(["/users"])
          })
          .catch(err=>console.log(err));
      })
      .catch(err => console.log(err))
  }

  getToken() : string{
    return this.token;
  }

  isAuthenticated(): boolean{
    return this.token != null;
  }

  logout(){
    firebase.default.auth().signOut()
      .then(response => {
        console.log("[LOGOUT SUCCESS]");
        this.token = null;
        this.router.navigate(["/login"]);
      })
      .catch(err => console.log(err))
  }

}


// > npm i firebase --save
