const obj={
    name:'golam Mustafa',
    id: 1234
}
const obj1=structuredClone(obj);
function chageObj(ob){
    ob.name='Afifa Tamanna';
    return ob;
}

console.log(chageObj(obj));
console.log(obj1);