// Task-3:
// Check whether a string contains all the vowels a, e, i, o, u
let str="aliuf-laaom-meem";
let count=0;
str=str.toUpperCase();

if(str.includes('A') && str.includes('E') && str.includes('I') && str.includes('O') && str.includes('U'))
    console.log("Contains all the vowels");
else
    console.log('Does not contain all hte vowels');