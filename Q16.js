let students =[{
    "name":"vinit",
    "mark":100

},
{
    "name":"tom",
    "mark":70
},
{
    "name":"tom",
    "mark":85
}
]

function above80(students){
    const a  = students.filter((o)=>{
        return o.mark>80
    })
}

console.log(above80(students));
