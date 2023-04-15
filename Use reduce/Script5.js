//Use the reduce() method to sum all the elements of an array.
const a=[10,20,30,40,50];
let sum=a.reduce(function(previousVal,currentVal){
    console.log("Prevoius Value "+previousVal);
    console.log("Current Value "+currentVal);
    return previousVal+currentVal;
});
console.log("Total "+sum);
/*
OUTPUT
Prevoius Value 10
Current Value 20
Prevoius Value 30
Current Value 30
Prevoius Value 60
Current Value 40
Prevoius Value 100
Current Value 50
Total 150
*/