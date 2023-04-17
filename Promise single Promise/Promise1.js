//Create a function that takes a single promise and resolves it only if a certain condition is fulfilled


function SinglePromise(){
    return new Promise((resolve,reject)=>{
        //0-head,1-tail
        let coin=Math.floor(Math.random()*2);
        if(coin==0){
            resolve("condition is fulfilled");
        }
        else{
            reject("condition is not fulfilled");
        }
    })
}

SinglePromise().then((msg)=>console.log(msg))
.catch((err)=>console.log(err));
/*
OUTPUT
condition is fulfilled
*/