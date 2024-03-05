function loadData2(){
    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(ressponse=>ressponse.json())
    .then(data=>displayUsers(data))
}

function loadUsers(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res=>res.json())
    .then(data=>displayUsers(data))
}

function displayUsers(users){
    const ul=document.getElementById('ulUser');
    

    for (let user of users){
        const li=document.createElement('li');
        li.innerText=user.name;
        ul.appendChild(li);
    }
        
}