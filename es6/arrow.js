const add=(a,b)=>a+b;
console.log(add(5,6));

const addArrayContents=arr=>{
    let sum=0;
    for(let value of arr)
    sum+=value;
    return sum;
}

const numbers=[3,4,5,65,7];
console.log(addArrayContents(numbers));
