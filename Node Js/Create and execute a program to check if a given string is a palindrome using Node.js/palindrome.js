//Create and execute a program to check if a given string is a palindrome using Node.js
const readline=require("readline").createInterface({
    input:process.stdin,
    output:process.stdout
});

readline.question("Enter the String :",(str)=>{
    const palindrome=find_palindrome(str);
    console.log(palindrome);
    readline.close();
});

function find_palindrome(str){
    var rev='';
    for(let i=str.length-1;i>=0;i--){
        rev=rev+str[i];
    }
    if(str==rev){
        console.log("Yes,given string is a palindrome ")
    }
    else{
        console.log("No, given string is not a palindrome ")
    }
    return str;
}