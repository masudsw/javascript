/*
Write an arrow function where it will do the following:
a. It will take two array inputs.
b. Combine the two arrays and assign them in a new array.
c. Find the maximum number from the new array and return the result.
*/

const maxFromArray=(numbers1,numbers2)=>{
     
    const number3=[...numbers1,...numbers2];
    return(Math.max(...number3))
}

const max= maxFromArray([22,3,4],[5,6,7]);
console.log(max);
