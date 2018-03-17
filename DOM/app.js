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
----------------*/