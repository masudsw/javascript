function PicnicBudget(numberOfPeople)
{
    
    if(typeof numberOfPeople !=='number')
        return "You should provide a number";
    else if(numberOfPeople<0)
        return "You should provide a positive number";
    else if(!Number.isInteger(numberOfPeople))
        return "Number of people can not be fraction";
    if(numberOfPeople<=100)
        return numberOfPeople*5000;
    else if(numberOfPeople<=200)
    {
        const first100=100*5000;
        const remaining=(numberOfPeople-100)*4000;
        return first100+remaining;
    }
    else
    {
        const first100=100*5000;
        const second100=100*4000;
        const remaining =(numberOfPeople-200)*3000;
        return first100+second100+remaining;
    }
    //    end of function    
}

console.log(PicnicBudget(2.4));