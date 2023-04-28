//Create a program to find the maximum number in a list of numbers using Node.js
const a=[10,20,30,40,50];
var max=a[0];
for(let i=1;i<a.length;i++){
  if(a[i]>max){
    max = a[i]
  }
}
console.log(max);