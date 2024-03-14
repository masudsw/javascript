//falsesy '' , 0 , false, null, undefined

function add(...numbers){
    console.log(numbers);
    let sum=0;
    for(let number of numbers)
    sum+=number;
return sum;
}

console.log(add(1,2,3,4,5))