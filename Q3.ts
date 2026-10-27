class School{
    static totalStudents:number
    studentList:object

    constructor(students:object) {
        this.studentList= students
    }
    increment(){
        
    }
}

const ob1 = {
    "StudentName" : "vinit",
    "Roll No" : 21
}

const ob = new School(ob1)