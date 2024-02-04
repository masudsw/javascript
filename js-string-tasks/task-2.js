// Task-2:
// Count how many times a string has the letter a or A
let str="alif-laam-AmeemA";
let count=0;
for(let i=0;i<str.length;i++)   
    if(str[i]=='a' || str[i]=='A')
        count++;
console.log("Total number of 'a' or 'A' is ",count," in the string","'",str,"'");