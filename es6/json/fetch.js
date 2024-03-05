// fetch('https://jsonplaceholder.typicode.com/todos/1')
    //   .then(response => console.log(response))
    //   .then(json => console.log(json))
    const url='https://jsonplaceholder.typicode.com/todos/1';
    fetch(url)
    .then(myResponse=>myResponse.json())
    .then(myJson=>console.log(myJson))