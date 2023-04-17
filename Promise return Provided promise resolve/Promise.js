//Create a function that takes one or more promises and returns a new promise when all of the provided promises resolve


function reachA(){
    return new Promise((resolve,reject)=>{
        let Reached=true;
        if(Reached){
            setTimeout(resolve,1000,"Rahul Reached");
        }
        else{
            reject("Rahul NOT Reached")
        }
    });
}

function reachB(){
    return new Promise((resolve,reject)=>{
        let Reached=true;
        if(Reached){
            setTimeout(resolve,1000,"Raj Reached");
        }
        else{
            reject("Raj NOT Reached")
        }
    });
}

function reachC(){
    return new Promise((resolve,reject)=>{
        let Reached=true;
        if(Reached){
            setTimeout(resolve,1000,"RahulRaj Reached");
        }
        else{
            reject("RahulRaj NOT Reached")
        }
    });
}

Promise.all([reachA(),reachB(),reachC()])
.then((msg)=>console.log(msg))
.catch((err)=>console.log(err))
/*
OUTPUT
[ 'Rahul Reached', 'Raj Reached', 'RahulRaj Reached' ]
*/