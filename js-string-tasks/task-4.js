// If a given string has either x, replace x by y. if the given string has X, replace it by Y.

// Hint: You should be able to check whether x or X exists. 
// After that, search online how to replace a character in a string.
let myStr="The quick brown fox XXXXXjumps over the lazy dog.  THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG";
let newStr = myStr.replace(/X/g, "Y");;
console.log(newStr);