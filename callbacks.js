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

function createPost(post, callback){
    setTimeout(() => {
        posts.push(post);
        callback()
    }, 0)
}

createPost({
    title: 'title3',
    body: 'This is post 3'
}, getPosts)