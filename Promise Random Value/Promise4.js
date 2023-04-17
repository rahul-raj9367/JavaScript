//Write a function that returns a promise that resolves to a random value

function Randomvalue(){
    return new Promise((resolve, reject)=>{
        resolve(Math.random());
    });
}
Randomvalue()
.then((num)=>console.log(num+" It will Generate Random Value"))
.catch((err)=> console.log(err))
/*
OUTPUT
0.3303048640844697 It will Generate Random Value
*/