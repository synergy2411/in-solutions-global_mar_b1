import { Injectable } from '@angular/core';
import { USER_DATA } from '../data/mocks';

@Injectable()
export class DataService {

  getUsers(){
    return USER_DATA;
  }

}
