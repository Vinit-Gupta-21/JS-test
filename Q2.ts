class Student{
    name:String="vinit"
    studentId:number=1
    grade:String="O"
    address:String="malad"

    displayInfo(){
        console.log(this.name);
        console.log(this.studentId);
        console.log(this.grade);
        console.log(this.address);
    }
}

const ob = new Student()
ob.displayInfo()