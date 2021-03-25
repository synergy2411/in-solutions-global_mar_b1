import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { DataService } from './services/data.service';
import * as firebase from 'firebase';
import { AuthService } from './services/auth.service';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // changeDetection : ChangeDetectionStrategy.OnPush
  // providers : [DataService]
})
export class AppComponent implements OnInit{
  title = 'users-app';
  showUsers : boolean = true;

  htmlSnippets = "<h1>This is HTML snippet</h1>"
  dangerUrl = "javascript:alert('Hello there')";
  safeUrl : SafeUrl;
  constructor(
    public dataService : DataService,
    public authService : AuthService,
    private sanitizer : DomSanitizer,
    private cdRef : ChangeDetectorRef
    ){}

  ngOnInit(){
    this.cdRef.detach();
    this.cdRef.reattach();
    this.safeUrl = this.sanitizer.bypassSecurityTrustScript(this.dangerUrl);
    firebase.default.initializeApp({
      apiKey: "AIzaSyB53EEXhYPRSx92KfR5kptULoUSc1Ilcoo",
      authDomain: "in-solutions-28661.firebaseapp.com"
    })
    // debugger;
  }

  onIncrement(){
    // debugger;
    this.dataService.counter++;
  }

}



// let user = {
//   name : "Foo"
// }

// // Mutable Change - Default Startegy
// user.name = "Bar";

// // Immutable Change - onPush Strategy
// user = {
//   name : "Baz"
// }
