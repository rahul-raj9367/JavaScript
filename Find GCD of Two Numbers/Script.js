//Write a program to find the greatest common divisor of two numbers.
var n1=50;
var n2=60;
while(n1!=n2){
    if(n1>n2){
        n1=n1-n2;
    }
    else{
        n2=n2-n1;
    }
}
console.log("GCD of n1 and n2 "+n2);
/*
OUTPUT
GCD of n1 and n2 10
*/