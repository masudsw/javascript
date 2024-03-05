// const actor = {
//      name : "ananto Jalil",
//      phone : "01856456789"
// }
// const {name:n ,phone:p}=actor
// // console.log(name);
// console.log(p);
// console.log(n);
// const numbers=[45,99]
// const [x,y]=numbers;
// console.log(x);
// console.log(y);
// function doubleThem(a,b){
//     return [a*2,b*2];
// }
// const [x,y]=doubleThem(5,6);
// console.log(x,y);

const student={
    name:"Golam Mustafa",
    id: "972042",
    gender : "male",
    isAdmitted : true
}
const keys=Object.keys(student);
const entries=Object.entries(student);
delete student.isAdmitted;
console.log(keys);
console.log(entries);
console.log(student);