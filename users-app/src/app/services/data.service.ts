import { Injectable } from '@angular/core';
import { USER_DATA } from '../data/mocks';
import { HttpClient } from '@angular/common/http';
import { User } from '../model/user';

@Injectable()
export class DataService {

  counter : number = 0;
  private BASE_URL : string = "https://in-solutions-28661-default-rtdb.firebaseio.com/userdata.json";

  constructor(private httpClient : HttpClient){}

  getUsersFromApi(){
    return this.httpClient.get<User[]>(this.BASE_URL);
  }

  createUser(){
    const body = {firstName : "Foo", lastName : "Bar", age: 32};
    this.httpClient.post(this.BASE_URL, body)
      .subscribe(data => {
        console.log("[POST DATA]", data);
      })
  }

  getUsersfromJson(){
    return this.httpClient.get("./assets/data/user-data.json");
  }

  getUsers(){
    return USER_DATA;
  }

}
