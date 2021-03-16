import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent{

  user = {
    firstName : "Bill",
    lastName : "Gates",
    dob : new Date("Dec 21, 1964"),
    income : 50000,
    isWorking : true,
    company : "Microsoft"
  }

}