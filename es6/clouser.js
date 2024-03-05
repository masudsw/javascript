const outerFunction=()=>{
    let count=0;
    const innerFunction=()=>{
        count++;
        console.log('count=',count);
    }
    return innerFunction;
}
const x1=outerFunction();
x1();
x1();
x1();
const x2=outerFunction();
x2();
x2();



