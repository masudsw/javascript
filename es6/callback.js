function show(name,age){
    console.log('My name is: ',name,'My age is :',age);
}
function fun1(name,age,callback){
    console.log('Assalamu Alaikum :');
     setTimeout(() => {
        callback(name);     
     }, 2000);
    
}

fun1('Golam Mustafa',44,show);