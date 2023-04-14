//Write a program to find the largest number in an array.
let a=[10,20,30,40,50];
let max=a[0];
for(let i=0;i<a.length;i++){
    if(a[i]>max){
        max=a[i];
    }
}
console.log("The largest number in an array "+ max);
/*
OUTPUT
The largest number in an array 50
*/