/*2. You are given an array say:[33,50,79,78,90,101,30]. 
Now return/get all the elements which are divisible by 10 using array.filter() method.
Now do the save task of question 2. 
But do this using array.find() method. 
Then compare the output of questions 2 and question 3
*/
const numbers=[33,50,79,78,90,101,30];
const result=numbers.filter(divisibleByten);
console.log(result);


function divisibleByten(number){
    if(number%10==0)
     return number; 
}
//  divisibleByten=number=> {
//     if(number%10==0) 
//        return number;
// }
    
// (x)=>{x%10==0?x}