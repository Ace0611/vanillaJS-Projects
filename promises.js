const posts = [
    {
        title: 'title1',
        body: 'This is post one'
    },
    {
        title: 'title2',
        body: 'This is post two',
    }
];

function getPosts(){
    setTimeout(() => {
        let output = '';
        posts.forEach((post, index) => {
            output += `<li>${post.title}</li>`;
        });
        document.body.innerHTML = output;
    }, 1000);
}

function createPost(post){
    return new Promise((res, rej) => {
        setTimeout(() => {
            posts.push(post);
            
            const error = false;
            if(!error){
                res()
            }else{
                rej('Error - Something is fishy');
            }
        }, 2000)
    })
}

// const promise1 = fetch('https://jsonplaceholder.typicode.com/posts').then((res) => {
//     return res.json()
// }).then((json)=>{
//     return json;
// })

// const promise2 = fetch('https://jsonplaceholder.typicode.com/users').then((res) => {
//     return res.json()
// }).then((json) => {
//     return json;
// })

async function fetchUsers(){
    const res = await fetch('https://jsonplaceholder.typicode.com/users')

    console.log(res);
    const data = await res.json();
    console.log(data);
}

fetchUsers()

// createPost({title: 'title3', body: 'huha'})
// .then(getPosts)
// .catch(err => console.log('huha'));

// Promise.all([promise1, promise2]).then(values => {
//     console.log(values)
// })