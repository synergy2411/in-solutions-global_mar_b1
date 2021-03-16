import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent{

  user : User = {
    firstName : "Bill",
    lastName : "Gates",
    dob : new Date("Dec 21, 1964"),
    income : 50000,
    isWorking : true,
    company : "Microsoft",
    image : "./assets/images/bill.jpg",
    votes : 120
  }

  onMoreInfo(user : User){
    alert(`Mr. ${user.lastName} is working with ${user.company}!!`);
  }

}