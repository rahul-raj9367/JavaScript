//Create and execute a program to output all prime numbers up to a given number using Node.js
const readline=require("readline").createInterface({
    input:process.stdin,
    output:process.stdout
});

readline.question("Enter the limit :",(num)=>{
    const primeLimit=printPrimesUpTo(num);
    console.log(primeLimit);
    readline.close();
});



function isPrime(num) {
    if (num <= 1) {
      return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i == 0) {
        return false;
      }
    }
    return true;
} 
function printPrimesUpTo(num) {
    for (let i = 2; i <= num; i++) {
        if (isPrime(i)) {
            console.log(i);
      }
    }
}
  