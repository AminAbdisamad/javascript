/* CREATE ELEMENTS 
----------------*/

const collection = document.querySelector('ul.collection');
//create new list item
const newListItem = document.createElement('li');
// Add class
newListItem.className = 'collection-item';
// Add id
newListItem.id = 'listItem';
// set attribute
newListItem.setAttribute('title','listItem');
//display text on element
//newListItem.textContent = "Not Hello";
//create new element
const link = document.createElement('a');
//newListItem.innerHTML = 'Hello <a href="#" class="delete-item secondary-content"><i class="fa fa-remove"></i></a>';
//add class
link.className = "delete-item secondary-content";
link.innerHTML = '<i class="fa fa-remove"></i>';
 //append link to newItemlist
newListItem.appendChild(link);
// append
collection.appendChild(newListItem);



//console.log(newListItem);
//console.log(collection);

/* REPLACE ELEMENTS 
-Todo list
----------------*/
//1. create h2 element with an id of task-title
// const newHeading = document.createElement('h2');
// //add id
// newHeading.id = "task-title";
// //2.Give it a title of 'Task list' by createTextNode
// newHeading.appendChild(document.createTextNode('Task List'));
// //newHeading.textContent = "Task List";
// //3. store the old heading into a variable 
// const oldHeading = document.getElementById('task-title');
// //4. store the parent element into a variable
// const cardAction = document.querySelector('.card-action');
// //5.and replace it with new heading element
// cardAction.replaceChild(newHeading,oldHeading);


//console.log(newHeading);


/* REMOVE ELEMENTS 
-Todo list
element.remove();
element.removeChild(child[0]);
----------------*/
const toRemove = document.querySelectorAll('li.collection-item');
// for (let i = 0 ; i < toRemove.length; i++){
//     toRemove[i].remove();
// }
// toRemove[2].remove();
toRemove[1].remove();
// toRemove[0].remove();
//console.log(toRemove);

/* Classes and attributes 
----------------*/
//classes
const firstLi = document.querySelector('li:first-child');
// const tlink = firstLi.children[0];
// let val;
// val = link.className;
// val = link.classList;
// link.classList.add('newclass');
// link.classList.remove('newclass');
// val = link;

//attributes
// val = link.getAttribute('href');
// val = link.setAttribute('href','asalsolutions.com');
// link.setAttribute('title','Asal Solutions');
// link.removeAttribute('title');
// val = link;

//console.log(val);

/* Event Listeners
----------------*/
let val;
const clearTask = document.querySelector('.clear-tasks');
// clearTask.addEventListener('click',e => console.log("Hello world"));
// clearTask.addEventListener('click',function(e){
//     console.log('Hello World');
//     e.preventDefault()
// });
clearTask.addEventListener('click',onClick);

function onClick(e){
    val = e.target.classList;
    val = e.target.className;
    e.target.style.background = "white";
    e.target.style.color = "orange";
    e.target.textContent = "Hi Aminux";
    val = e.target.style.background = "blue";


    val = e.type;
    val = e.timeStamp;
    //coordinate  events from the window
    val = e.clientX;
    val = e.clientY;

    //coordinate events relative elements 
    val = e.offsetY;
    val = e.offsetX;

    //
    //console.log(val);
    //e.preventDefault();
    

}

/* Mouse Events */
const heading = document.querySelector('#task-title');
const card = document.querySelector('.card');

//clearTask.addEventListener('click',event);
//clearTask.addEventListener('dblclick',event);
//card.addEventListener('mouseenter', event);
//card.addEventListener('mouseleave', event);
//card.addEventListener('mousedown', event);
//card.addEventListener('mouseup', event);
//card.addEventListener('mouseover', event);
//card.addEventListener('mouseout', event);
card.addEventListener('mousemove', event);
// mouse event function 
function event(e){
    //mouseenter - mousedown - mouse - 
    //val = e.type;
    //offset display and background color
    //heading.textContent = `MouseX: ${e.offsetX} MouseY: ${e.offsetY}`;
    //document.body.style.background=`rgb(${e.offsetX},${e.offsetY},40)`;
    //console.log(`Type of ${val}`);
    //e.preventDefault();
};

/* Keyboard events
-----------------
1. get input value 
2. get form submit event
*/

//task-form
//task
const form = document.querySelector('form');
//const addTask = document.getElementById('task');
const addTask = document.querySelector('#task');


//card.addEventListener('mousemove', event);
form.addEventListener("submit", taskAdd);
//addTask.addEventListener('keydown',taskAdd);
// addTask.addEventListener('keyup',taskAdd);
//addTask.addEventListener('keypress',taskAdd);
//addTask.addEventListener('focus',taskAdd);
// addTask.addEventListener('blur',taskAdd);
// addTask.addEventListener('cut',taskAdd);
// addTask.addEventListener('past',taskAdd);
// addTask.addEventListener('past',taskAdd);
const select = document.querySelector('select');
//select.addEventListener('change',taskAdd);
function taskAdd(e){
    console.log(`Type of : ${e.type}`);
    console.log(e.target.value);
    e.preventDefault();
    //val = addTask.value;
    //addTask.value = "";
    //createItemList();
    // heading.innerHTML = e.target.value;
}
//Create Element function
function createItemList(){
//create the list element
const oldUl = document.querySelector('ul.collection');
const listElement = document.createElement('li');
const links = document.createElement('a');
//collection-item
listElement.className ='collection-item';
links.className ='delete-item secondary-content';
links.innerHTML = '<i class="fa fa-remove"></i>';
listElement.appendChild(links);
oldUl.appendChild(listElement);
listElement.textContent = addTask.value;
//listElement.innerHTML = addTask.value;


// console.log(oldUl);
console.log(listElement);
}
//createItemList();

//remove list - to be completed
// const getLinkClass = document.querySelector('.delete-item');
// getLinkClass.addEventListener('click',theRemoveItem);
// function theRemoveItem(e){
//     console.log('clicked');
//     e.preventDefault();
// }
// function removeList(){
//     for (let i = 0 ; i < toRemove.length; i++){
//      toRemove[i].remove();
//  }
// }


// Event bubling
document.querySelector('.card-title').addEventListener('click',function (){
    //console.log('Card Title');
});
document.querySelector('.card-content').addEventListener('click',function (){
    //console.log('Card content');
});
document.querySelector('.card').addEventListener('click',function (){
    //console.log('Card');
});
document.querySelector('.col').addEventListener('click',function (){
    //console.log('col');
});



// Event Deligation  - putting event on target and going down 

const deleteItems = document.querySelector('.delete-item');
deleteItems.addEventListener('click',delItem)
function delItem(){
    //console.log('delete Item');
}
document.body.addEventListener('click',deleteItem)
function deleteItem(e){
    //console.log(e.target.className);
// if(e.target.className === "fa fa-remove"){
//     //e.target.remove();
//     console.log('deleted Item');
// }
// instead of using className === "delete-item secondary-content" its better to use .classlist.contains('delete-Item');
if(e.target.parentElement.classList.contains('delete-item')){
    e.target.parentElement.parentElement.remove();
    console.log('deleted Item');
}
}


/* Local and Session storage */
//its part of the browser if you write window in the console you can find it.

// different btw local  and session storage is that local storage stays until you clear it out while session storage goes out whenever you close your browser 

//setting up local storage
sessionStorage.setItem('name','Amin');
//setting up local storage
// localStorage.setItem('name','Aminux');
// localStorage.setItem('age',27);
// localStorage.setItem('name','Halimux');
// localStorage.setItem('age',30);
// remove items from local storage
//localStorage.removeItem('name');
// get from storage
// const name = localStorage.getItem('name');
// const age = localStorage.getItem('age');
// localStorage.clear();
// console.log(name,age);
document.querySelector('#task-form').addEventListener('submit',function (e){
    const task = document.querySelector('#task').value;
    let tasks;
    if(localStorage.getItem('tasks') === null){
        tasks = [];

    }else{
        tasks = JSON.parse(localStorage.getItem('tasks')); 
    }
    tasks.push(task);
    localStorage.setItem('tasks',JSON.stringify(tasks));
    alert('Task Saved');

    e.preventDefault();
});
const tasks = JSON.parse(localStorage.getItem('tasks'));
tasks.forEach(function(task,index){
    console.log(`${index} : ${task}`);
});



