import { Injectable } from '@angular/core';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  
  private token : string = null;
  
  constructor() {}

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
        // console.log("SUCCESS", response);
        firebase.default.auth().currentUser.getIdToken()
          .then(token => {
            // console.log("TOKEN", token);
            this.token = token;
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

}


// > npm i firebase --save