//Write a program to check if a number is prime or not.
let n=7;
let flag=0;
if(n==0||n==1){
    console.log(n+ "is not a Prime Number");
}
else{
    for(let i=2;i<7;i++){
        if(n%i==0){
            console.log(n+" is not a Prime Number");
            flag=1;
            break;
        }
    }
}
console.log(n+" is a Prime Number ");
/*
OUTPUT
7 is a Prime Number 
*/