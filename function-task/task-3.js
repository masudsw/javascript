// Task-3
// Write a function called make_avg() which will take an array of integers 
// and the size of that array and return the average of those values.
function make_avg(temp,size){
    let sum=0;
    for(let i=0;i<size;i++)
        sum=sum+temp[i];
    return sum/size;
}
let num=[10,10,5,5,10,5];
console.log(make_avg(num,6));