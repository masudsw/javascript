function makeRed(){
    document.body.style.backgroundColor='red';
}
const makeBlue=document.getElementById('buttonBlue');
makeBlue.onclick=makeButtonBlue;

const btPink=document.getElementById('btPink');
console.log(btPink);
btPink.addEventListener('click',makePink);
const btGreen=document.getElementById('btGreen');
btGreen.addEventListener('click',function makeGreen(){
    document.body.style.backgroundColor='green';
});
function makeButtonBlue(){
    document.body.style.backgroundColor='blue';
}
function makePink(){
    document.body.style.backgroundColor='pink';
}

// document.getElementById('btTomato',function(){
//     document.body.style.backgroundColor='tomato';
// })