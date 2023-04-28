//Create and execute a program to calculate the Fibonacci sequence of numbers up to a given number using Node.js
const readline=require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
});


readline.question("Enter the Number :",num =>{
    const fib=Find_Fib(num);
    console.log(`The Fibonacci series of ${num} is ${fib}`);
    readline.close();
})

function Find_Fib(num){
    var n1=0,n2=1,c;
    for(let i=2;i<=num;i++){
        c=n1+n2; 
        n1=n2;
        n2=c;
    }
    return c;
}