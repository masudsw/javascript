/*
Write an arrow function where it will do the following: x2
a. Square each array element.
b. Calculate the sum of the squared elements.
b. Return the average of the sum of the squared elements.
*/

const squreSum=(numbers)=>{
    sum=0;
    for(let num of numbers)
    sum=sum+num*num;
    return(sum/numbers.length);
}

const nums=[2,3,4,5,6];
console.log(squreSum(nums));