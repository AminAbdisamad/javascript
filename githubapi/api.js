// document.querySelector('#userBtn').addEventListener('click',getGithubAPI);
// function getGithubAPI(e){
//     const xhr = new XMLHttpRequest();
//     const userInput = document.querySelector('#userid').value;
//     xhr.open('GET',`https://api.github.com/users/${userInput}`,true);
//     xhr.onload = function(){
//         if(this.status === 200){
//          const response = JSON.parse(this.responseText);
//          const output = `<ul>
//                         <li>Name: ${response.name}</li>
//                         <li>Company: ${response.company}</li>
//                         <li>Blog: ${response.blog}</li>
//                         <li>Location: ${response.location}</li>
//                         <li>Public Repository: ${response.public_repos}</li>
//                         <li>Following: ${response.following}</li>
//                         <li>Followers: ${response.followers}</li>
//                         </ul>`;
//                         document.getElementById('users').innerHTML = output;
//         }
      

//     }
    
    
//     xhr.send();
// }


//kedydown
document.querySelector('#userid').addEventListener('keydown',getGithubAPI);
function getGithubAPI(e){
    const xhr = new XMLHttpRequest();
    const userInput = document.querySelector('#userid').value;
    xhr.open('GET',`https://api.github.com/users/${userInput}`,true);
    xhr.onload = function(){
        if(this.status === 200){
         const response = JSON.parse(this.responseText);
         const output = `<ul>
                        <li>Name: ${response.name}</li>
                        <li>Company: ${response.company}</li>
                        <li>Blog: ${response.blog}</li>
                        <li>Location: ${response.location}</li>
                        <li>Public Repository: ${response.public_repos}</li>
                        <li>Following: ${response.following}</li>
                        <li>Followers: ${response.followers}</li>
                        </ul>`;
                        document.getElementById('users').innerHTML = output;
        }
      

    }
    
    
    xhr.send();
}
