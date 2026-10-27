"use strict";
class Student {
    name = "vinit";
    studentId = 1;
    grade = "O";
    address = "malad";
    displayInfo() {
        console.log(this.name);
        console.log(this.studentId);
        console.log(this.grade);
        console.log(this.address);
    }
}
const ob = new Student();
ob.displayInfo();
