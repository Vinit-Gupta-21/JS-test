function getStudentInfo<T>(info: T):T{
    return info
}

const ob = {
    "StudentName" : "vinit",
    "Roll No" : 21
}

console.log(getStudentInfo(ob));
