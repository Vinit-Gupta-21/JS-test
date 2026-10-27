async function work(r) {
    return new Promise((res,rej)=>{
        if (r) {
            res("work done")
        } else {
            rej("work pending")
        }
    })
}



work(true).then)