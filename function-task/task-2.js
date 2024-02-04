// Task-2
// Take a number if the number is odd multiply it by 2 and return the result.
//  If the number is even divide it by two and return the result.
function operationNumbers(num){
    num=parseInt(num);
    if(num%2==0)
       return num/2;
    else
        return num*2;
}

const num=operationNumbers(16.67);
console.log(num);