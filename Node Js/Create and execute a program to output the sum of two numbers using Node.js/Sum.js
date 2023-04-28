//Create and execute a program to output the sum of two numbers using Node.js
const readline=require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})
readline.question('Enter the Number 1:',(num1)=>{
    readline.question('Enter the Number2 :',(num2)=>{
        const sum=parseInt(num1)+parseInt(num2);
        console.log(sum);
        readline.close();
    })
})