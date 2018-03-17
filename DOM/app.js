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
newListItem.textContent = "Hello";
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
const newHeading = document.createElement('h2');
//add id
newHeading.id = "task-title";
//2.Give it a title of 'Task list' by createTextNode
newHeading.appendChild(document.createTextNode('Task List'));
//newHeading.textContent = "Task List";
//3. store the old heading into a variable 
const oldHeading = document.getElementById('task-title');
//4. store the parent element into a variable
const cardAction = document.querySelector('.card-action');
//5.and replace it with new heading element
cardAction.replaceChild(newHeading,oldHeading);


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
const tlink = firstLi.children[0];
let val;
val = link.className;
val = link.classList;
link.classList.add('newclass');
link.classList.remove('newclass');
val = link;

//attributes
val = link.getAttribute('href');
val = link.setAttribute('href','asalsolutions.com');
link.setAttribute('title','Asal Solutions');
link.removeAttribute('title');
val = link;

//console.log(val);

