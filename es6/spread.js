//array spread.
/*
const arr1=[2,3,5, 6,7];
const arr2=[...arr1];
console.log(arr1);
console.log(arr2);
arr2.push(88,98,40);
console.log('arr1',arr1);
console.log('arr2',arr2);
*/

//Object spread.
const student={
    name:'Golam Mustafa',
    id:'972042',
    gender:'Male',
    address:{
        house:45,
        road:4,
        thana:'Daudkandi',
        distric:'Comilla'
    },
    phone:'02856316525'
}
const {id,name,...rest}=student;
console.log(name,id);
console.log(rest);
const {address}=rest;
console.log(address);
const {distric:zila}=address;
console.log(zila);
const {address:{distric:zil}}=student;
console.log(zil);

