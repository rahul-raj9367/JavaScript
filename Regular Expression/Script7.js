//Write a regular expression to match all numbers in a string.
let a="Regular Expression 1234";
let b=/\d/g;//d-Digits
console.log(a.match(b));
/*
OUTPUT
[ '1', '2', '3', '4' ]
*/
