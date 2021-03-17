import {
  AfterContentChecked, AfterContentInit, AfterViewChecked,
  AfterViewInit, Component, DoCheck, Input,
  OnChanges, OnDestroy, OnInit, SimpleChanges
} from '@angular/core';
import { USER_DATA } from '../data/mocks';
import { User } from '../model/user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit
  // OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy 
{

  @Input() title: string;

  users: User[];

  ngOnInit(): void {
    this.users = USER_DATA;
    // console.log("ngOnInit")
  }

  constructor(){
    // console.log("constructor")
    // this.users = USER_DATA;
  }

  // ngOnChanges(changes: SimpleChanges) {
  //   console.log("ngOnChanges", changes);
  // }
  // ngDoCheck() { console.log("ngDoCheck") }
  // ngAfterContentInit() { console.log("ngAfterContentInit") }
  // ngAfterContentChecked() { console.log("ngAfterContentChecked") }
  // ngAfterViewInit() { console.log("ngAfterViewInit") }
  // ngAfterViewChecked() { console.log("ngAfterViewChecked") }
  // ngOnDestroy() { console.log("ngOnDestroy") }


  onMoreInfo(user: User) {
    alert(`Mr. ${user.lastName} is working with ${user.company}!!`);
  }

}