//Write a regular expression to match all numbers in a string.
let a="Regular Expression 1234";
let b=/[1234]/g;
console.log(a.match(b));
/*
OUTPUT
[ '1', '2', '3', '4' ]
*/