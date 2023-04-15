//Create a switch statement that checks a variable and alerts a different message depending on what the variable is equal to
const fruits = "Apple";
switch(fruits) {
  case "Banana":
    console.log("Banana is good!");
    break;
  case "Orange":
    console.log("I am not a fan of orange.");
    break;
  case "Apple":
   console.log("How you like them apples?");
    break;
  default:
    console.log("I have never heard of that fruit...");
}
/*
OUTPUT
How you like them apples?
*/