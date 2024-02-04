// Task-1:
// Count how many times a string has the letter a
let str="alif-laam-meem";
let count=0;
for(let i=0;i<str.length;i++)   
    if(str[i]=='a')
        count++;
console.log("Total number of 'a' is ",count," in the string","'",str,"'");