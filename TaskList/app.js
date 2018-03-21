// Global variabes 

const tasks = document.querySelector('#task');
const form = document.querySelector('#task-form');
const collections = document.querySelector('ul.collection');
const btnSubmit = document.querySelector('#addTaskBtn')

//load event listeners 
loadEventListeners()
function loadEventListeners(){
    //form.addEventListener('submit',addTask);
    btnSubmit.addEventListener('click',addTask);


}
function addTask(e){
    //console.log(e.target.value);
    if(tasks.value === ""){
        alert('Add a task');
    }
    const li = document.createElement('li');
    li.className = "collection-item";
    li.appendChild(document.createTextNode(tasks.value));
    //Create delete btn
    function deleteBtn(){
        const deleteBtnLink = document.createElement('a');
        deleteBtnLink.className = "btn-floating btn-smaller red secondary-content";
        deleteBtnLink.innerHTML = '<i class="material-icons">delete</i></a>';
    }
    
    //Create delete btn
    const editBtnLink = document.createElement('a');
    editBtnLink.className = "btn-floating btn-smaller green secondary-content";
    editBtnLink.innerHTML = '<i class="material-icons">mode_edit</i></a>';
    //Create delete btn
    const doneBtnLink = document.createElement('a');
    doneBtnLink.className = "btn-floating btn-smaller orange darken-2 secondary-content";
    doneBtnLink.innerHTML = '<i class="material-icons">done</i></a>';
    //append links to the list item
    li.appendChild(deleteBtn);
    li.appendChild(editBtnLink);
    li.appendChild(doneBtnLink);
    collections.appendChild(li);
    console.log(e.target);
    //e.preventDefault();

}