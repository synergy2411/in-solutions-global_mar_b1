import { Person } from "./person";

export class Student1 {
    private email : string;
    private age : number;

    // constructor(email : string, age : number){
    //     this.age = age;
    //     this.email = email;
    // }

    constructor(theObj : Person){
        this.email = theObj.email;
        this.age = theObj.age;
    }

    getMyDetails() : string {
        return `Hello ${this.email}, You are ${ this.age } years old!`
    }
}