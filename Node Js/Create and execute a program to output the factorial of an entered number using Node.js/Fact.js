//Create and execute a program to output the factorial of an entered number using Node.js
const readline=require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Enter a number: ', num => {
    const factorial = getFactorial(num);
    console.log(`The factorial of ${num} is ${factorial}`);
    readline.close();
});  
function getFactorial(num) {
  if (num === 0 || num === 1) {
    return 1;
  }
  let factorial = 1;
  for (let i = 2; i <= num; i++) {
    factorial *= i;
  }
  return factorial;
}