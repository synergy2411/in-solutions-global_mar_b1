"use strict";
exports.__esModule = true;
var student_1 = require("./student");
// let foo1  = new Student1("Foo@test.com", 40);
var obj = {
    email: "abc@test.com",
    age: 30
};
var foo2 = new student_1.Student1(obj);
console.log(foo2.getMyDetails());
