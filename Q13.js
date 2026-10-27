


function inventory(q){
    try {
        if(q<5){
            throw new Error("stocks are very low!")
        }else{
            console.log("stock are available ");
            
        }
    } catch (error) {
        console.log(error.name+ " "+ error.message);
        
    }
}

inventory(5)