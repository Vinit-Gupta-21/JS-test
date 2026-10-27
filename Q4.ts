abstract class Person{
    abstract getDetails():void;
    abstract getRole():void;

}


class Student extends Person{
    getDetails() {
        console.log("Name : vinit");
        console.log("Rollno : 21");
        
    }
    getRole() {
        console.log("Role : Student");
        
    }
    
}

class Teacher extends Person{
    getDetails() {
       console.log("Name : alex");
    }
    getRole() {
        console.log("Role : Teacher");
        
    }

}

const ob = new Student()
ob.getDetails()
ob.getRole()
console.log("------");

const ob2= new Teacher()
ob2.getDetails()
ob2.getRole()

