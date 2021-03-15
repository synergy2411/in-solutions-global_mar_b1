"use strict";
exports.__esModule = true;
exports.Student1 = void 0;
var Student1 = /** @class */ (function () {
    // constructor(email : string, age : number){
    //     this.age = age;
    //     this.email = email;
    // }
    function Student1(theObj) {
        this.email = theObj.email;
        this.age = theObj.age;
    }
    Student1.prototype.getMyDetails = function () {
        return "Hello " + this.email + ", You are " + this.age + " years old!";
    };
    return Student1;
}());
exports.Student1 = Student1;
