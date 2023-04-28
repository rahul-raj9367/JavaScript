//Write a program to reverse a string using Node.js
const readline=require("readline").createInterface({
    input:process.stdin,
    output:process.stdout
});

readline.question("Enter the String :",(str)=>{
    const reverstring=reverse(str);
    console.log(`After Reverse the String : ${reverstring}`);
    readline.close();
});
function reverse(str){
    var rev='';
    for(let i=str.length-1;i>=0;i--){
        rev=rev+str[i];
    }
    return rev;
}