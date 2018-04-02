const posts = [
    {title:'Post One',body:'This is post one'},
    {title:'Post Two',body:'This is post Two'}
]

function createPosts(post,cb){
    setTimeout(() => {
        posts.push(post)
        cb()
    }, 2000);
}


function getPosts(){
    setTimeout(function(){
        let output = '';
        posts.forEach(function(post){
            output += `<li><strong>${post.title}</strong><br> ${post.body}</li>`;
        })
        document.body.innerHTML = output;
    },1000)
}
createPosts({title:'Post Three',body:'This is post three'},getPosts)
