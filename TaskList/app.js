// Global variabes

const tasks = document.querySelector('#task');
const form = document.querySelector('#task-form');
const collections = document.querySelector('ul.collection');
const btnSubmit = document.querySelector('#addTaskBtn');
const clearBtn = document.querySelector('.clear-tasks');

//load event listeners
loadEventListeners();
function loadEventListeners() {
  //form.addEventListener('submit',addTask);
  btnSubmit.addEventListener('click', addTask);
  collections.addEventListener('click', removeTask);
  clearBtn.addEventListener('click', clearAll);
}
function clearAll(e) {
  //collections.innerHTML = "";
  // collections.forEach(function(li){
  //     li.remove();
  // });
  while (collections.firstChild) {
    collections.removeChild(collections.firstChild);
  }
  e.preventDefault();
}
function removeTask(e) {
  e.target.parentElement.classList.contains('delete')
    ? e.target.parentElement.parentElement.remove()
    : '';
  e.preventDefault();
}
function addTask(e) {
  //console.log(e.target.value);
  if (tasks.value === '' || tasks.value === null) {
    alert('Add a task');
  } else {
    const li = document.createElement('li');
    li.className = 'collection-item';
    //li.classList.contains
    li.appendChild(document.createTextNode(tasks.value));
    //Create delete btn
    const deleteBtnLink = document.createElement('a');
    deleteBtnLink.className =
      'btn-floating btn-smaller red delete secondary-content';
    deleteBtnLink.innerHTML = '<i class="material-icons">delete</i></a>';
    //Create delete btn
    const editBtnLink = document.createElement('a');
    editBtnLink.className =
      'btn-floating btn-smaller green edit secondary-content';
    editBtnLink.innerHTML = '<i class="material-icons">mode_edit</i></a>';
    //Create delete btn
    const doneBtnLink = document.createElement('a');
    doneBtnLink.className =
      'btn-floating btn-smaller edit orange darken-2 secondary-content';
    doneBtnLink.innerHTML = '<i class="material-icons">done</i></a>';
    //append links to the list item
    li.appendChild(deleteBtnLink);
    li.appendChild(editBtnLink);
    li.appendChild(doneBtnLink);
    collections.appendChild(li);
  }
  //storeTasksInLocalStorage(tasks.value);
  //tasks.value = "" ;
  //console.log(e.target);
  e.preventDefault();
}
/* TO DO : 
1. persist into local storage 
2. filter input 
3. done button
4. edit button
*/
