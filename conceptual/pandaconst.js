function PandaCost(num1,num2,num3){
    if(typeof num1!=='number'|| typeof num2!=='number'|| typeof num3!='number')
       return "You should provide three numbers";
    else if(num1<0 || num2<0 || num3<0)
        return "You should provide positive numbers";
    else if(!Number.isInteger(num1)|| !Number.isInteger(num2)|| !Number.isInteger(num3))
        return "You should provide integer numbers";
    const shingaraPrice=7;
    const somochaPrice=10;
    const jilapiPrice=15;
    return shingaraPrice*num1+somochaPrice*num2+jilapiPrice*num3;
}
const totalPrice=PandaCost(-2,2,2);
console.log(totalPrice);