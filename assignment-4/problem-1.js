function calculateMoney(ticketSale) {
    if(ticketSale<0)
        return "Invalid Number";
    const perTicketPrice=120;
    const securityGuardSalary=500;
    const stuffLunchPerPerson=50;
    const totalStuff=8;
    const lunchCost=stuffLunchPerPerson*totalStuff;
    const totalCostPerDay=securityGuardSalary+lunchCost;
    const ticketSaleIncome=ticketSale*perTicketPrice;
    const totalIncome=ticketSaleIncome-totalCostPerDay;
    return totalIncome;
    }
    

function checkName(name) {
    if (typeof name!=='string')
      return "Invalid";
    const lastIndex=name.length-1;
    const lastLetter=name[lastIndex];
    lastLetterLowerCase=lastLetter.toLowerCase();
    const list=['a','y','i','e','o','u','w'];
    if(list.includes(lastLetterLowerCase))
    //if(lastLetterLowerCase==='a'|| lastLetterLowerCase==='e'|| lastLetterLowerCase==='i' || lastLetterLowerCase==='o'|| lastLetterLowerCase==='u'||lastLetterLowerCase==='y'|| lastLetterLowerCase==='w')
      return "Good Name";
    else   
      return "Bad Name";
    }
    

function deleteInvalids(array) {
    if (!Array.isArray(array))
        return "Invalid Array";
    const arrResult=[];
    for(let i=0;i<array.length;i++)
    {
        if(typeof array[i]==='number' && !Number.isNaN(array[i]))
            arrResult.push(array[i]);
    }
    return arrResult;
    }
    

    function password(obj) {
        const name=obj.name;
        const siteName=obj.siteName;
        const birthYear=obj.birthYear;
        const str=birthYear.toString();//Converting the year from number to string for operation.
        if(typeof name==='undefined'|| typeof siteName==='undefined'|| typeof birthYear==='undefined')
        return "Invalid";
        else if(str.length<4) //checking whether the digits in birth year is less than 4.
        return "Invalid";
        const firstLetter=siteName.charAt(0).toUpperCase();//convert the first letter in upper case.
        const newSiteName=firstLetter+siteName.slice(1);// join the capital letter with the rest of the string.
        const pass=newSiteName+"#"+name+"@"+birthYear;
        return pass;    
    }
    

    function monthlySavings(arr , livingCost) {
            if(!Array.isArray(arr))
                return "Invalid input";
            if(typeof livingCost!=='number')
                return "Invalid input";
            let totalPayment=0;
            for(let i=0;i<arr.length;i++)
            {
                let payment=arr[i];
                if(payment>=3000)
                {
                    let tax=payment*20/100;
                    payment=payment-tax;
                }
                totalPayment=payment+totalPayment;
            }
            let savings=totalPayment-livingCost;
            if(savings<0)
                return "Earn more"
            return savings;
            }

    console.log(monthlySavings(100, [ 900 , 2700 , 3400] ));
