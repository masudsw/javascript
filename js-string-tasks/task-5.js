// Task-5:
// Capitalize Every first Letter of each word in a String

var abbr = "java   script object   notation";
abbr = abbr. replace(/\s+/g, " ");//Removing multiple whitespace of a string.
console.log(abbr);
abbr=abbr.split(' ');
for(let i=0;i<abbr.length;i++)
{
    let str1=abbr[i][0].toUpperCase();
    abbr[i]=str1+abbr[i].substring(1);
}
var str=abbr.join(" ");
console.log(str);