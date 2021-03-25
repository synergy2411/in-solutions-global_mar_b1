import { Injectable } from "@angular/core";

@Injectable()

export class DataService{
  user = { name : "Bam"}

  getUser(){
    return this.user;
  }

  setUser(username: string){
    this.user.name = username;
  }
}
