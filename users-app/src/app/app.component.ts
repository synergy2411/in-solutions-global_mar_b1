import { Component, OnInit } from '@angular/core';
import { DataService } from './services/data.service';
import * as firebase from 'firebase';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // providers : [DataService]
})
export class AppComponent implements OnInit{
  title = 'users-app';
  showUsers : boolean = true;
  
  constructor(
    public dataService : DataService,
    public authService : AuthService
    ){}

  ngOnInit(){
    firebase.default.initializeApp({
      apiKey: "AIzaSyB53EEXhYPRSx92KfR5kptULoUSc1Ilcoo",
      authDomain: "in-solutions-28661.firebaseapp.com"
    })
  }

  onIncrement(){
    this.dataService.counter++;
  }

}
