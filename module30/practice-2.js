// Write an arrow function where it will do the following:
//  a. It will take an array where the array elements will be the name of your friends.It
//  b. Check if the length of each element is event, push elements with even length to a new array and return the 
//  result.
//  Print the result

const friends=(arr)=> {
    const newArr=[];
   
    for(let ar of arr)
        if(ar.length%2==0)
            newArr.push(ar);
    return newArr;
}
const frd=['masud','sumon','suhag','sarwar','habib']
console.log(friends(frd));