import { User } from "../model/user";

export const USER_DATA: User[] = [{
    firstName: "Bill",
    lastName: "Gates",
    dob: new Date("Dec 21, 1964"),
    income: 50000,
    isWorking: true,
    company: "Microsoft",
    image: "./assets/images/bill.jpg",
    votes: 120
},{
    firstName: "steve",
    lastName: "Jobs",
    dob: new Date("Jan 2, 1964"),
    income: 0,
    isWorking: false,
    company: "Apple",
    image: "./assets/images/steve.jpg",
    votes: 100
},{
    firstName: "Tim B.",
    lastName: "Lee",
    dob: new Date("Aug 5, 1965"),
    income: 40000,
    isWorking: true,
    company: "World Wide Web",
    image: "./assets/images/tim.jpg",
    votes: 180
}]