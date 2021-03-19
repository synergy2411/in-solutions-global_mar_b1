import { Injectable } from '@angular/core';
import { USER_DATA } from '../data/mocks';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class DataService {

  counter : number = 0;

  constructor(private httpClient : HttpClient){}

  getUsersfromJson(){
    return this.httpClient.get("./assets/data/user-data.json");
  }

  getUsers(){
    return USER_DATA;
  }

}
