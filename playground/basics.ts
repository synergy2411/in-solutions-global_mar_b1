import { Person } from './person';
import { Student1 } from './student';

// let foo1  = new Student1("Foo@test.com", 40);

let obj : Person = {
    email : "abc@test.com",
    age : 30
}

let foo2 = new Student1(obj);

console.log(foo2.getMyDetails());


// Webpack - module bundler