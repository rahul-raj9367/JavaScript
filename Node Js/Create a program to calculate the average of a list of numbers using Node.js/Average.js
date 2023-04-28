//Create a program to calculate the average of a list of numbers using Node.js
const a=[10,20,30,40,50];
let sum=0;
for(let i=a.length-1;i>=0;i--){
    sum=sum+a[i];
}
const average =sum/a.length;
console.log(average)