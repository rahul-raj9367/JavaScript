//Create a function that takes two promises and resolves them in parallel, returning the result when both are done

let coin="head";

function parallelPromises1(){
    return new Promise((resolve,reject)=>{
        if(coin=="head"){
            resolve("condition is fulfilled");
        }
        else{
            reject("condition is not fulfilled");
        }
    })
}

function parallelPromises2(){
    return new Promise((resolve,reject)=>{
        if(coin=="head"){
            resolve("condition is fulfilled");
        }
        else{
            reject("condition is not fulfilled");
        }
    })
}

Promise.all([parallelPromises1(),parallelPromises2()])
.then((msg)=>console.log(msg))
.catch((err)=>console.log(err));
/*
OUTPUT
[ 'condition is fulfilled', 'condition is fulfilled' ]
*/