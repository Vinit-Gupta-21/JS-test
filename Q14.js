fetch("https://jsonplaceholder.typicode.com/users").then((result) => {
    console.log(result);
    
}).then((data)=>{
    console.log(data);
    
}).catch((err)=>{
    console.log(err);
    
})