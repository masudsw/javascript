function postData(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res=>res.json())
    .then(data=>showPosts(data))
}

function showPosts(posts){
    const postContainer=document.getElementById('postContainer');
    for(let post of posts){
        const div=document.createElement('div');
        div.innerHTML=`
        <h3>${post.title}</h3>
        <p>${post.body}</p>
        `
        postContainer.appendChild(div);
    }
    console.log(posts);
}
postData();