const numbers=[10,20,30,40,50];

//forEach,--- does not return.
//  map,-- return the updated array
//  find , 
// filter, 
// reduce
// for(let item of numbers)
//  console.log(item);

// numbers.forEach(item=>console.log(item));

const updateNumber=numbers.map(item=> item+5)
console.log(updateNumber);

let number=numbers.find(item=>item>30);
console.log(number);

number=numbers.filter(item=>item>30);
console.log(number);

const myNumbers=[3,4,1,3,6,8];
const result=myNumbers.reduce((previous,current)=>previous*current,1)
console.log(result);