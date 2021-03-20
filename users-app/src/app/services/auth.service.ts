import { Injectable } from '@angular/core';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
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
            console.log("TOKEN", token);
          })
          .catch(err=>console.log(err));
      })
      .catch(err => console.log(err))
  }
}


// > npm i firebase --save