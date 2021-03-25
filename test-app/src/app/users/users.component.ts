import { Component, OnInit } from "@angular/core";
import { DataService } from "../services/data.service";

@Component({
  selector : "app-users",
  template : `<h1>Users works!!</h1>`,
  providers : [DataService]
})
export class UsersComponent implements OnInit{
  constructor(private dataService : DataService){}
  ngOnInit(): void {
    this.theUserName = this.dataService.getUser().name;
  }
  username : string = "Foo";
  theUserName : string;

}
