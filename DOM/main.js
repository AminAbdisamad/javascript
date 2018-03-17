let val;
val = document.all[8];
val = document.all.length;
val = document.head;
val = document.body;
val = document.doctype;
val = document.domain;
val = document.URL;
val = document.textContent;
val = document.charset;
val = document.contentType;

val= document.forms;
val = document.forms[0].id;
val = document.forms[0].method;
val = document.forms[0].action;

val = document.links[0];
val = document.links[0].className;
val = document.links[0].classList[0];


val = document.scripts;
val = document.scripts[2].getAttribute('src');

let element = document.body; 
let scripts = document.scripts
let scriptArr = Array.from(scripts);
scriptArr.forEach(function(script){
    //console.log(script);
});

//console.log(val);


//Selecting Single Elements 
/* getElementById*/
// let taskTitle = document.getElementById('task-title');
// taskTitle.style.background = '#eee';
// taskTitle.style.color = '#333';
// taskTitle.style.padding = '10px';
// //taskTitle.style.display = 'none';

// //changing content
// taskTitle.textContent = "Task List";
// taskTitle.innerText = "The Task List";
// taskTitle.innerHTML ="<span style='color:blue'>Task List</span>"

/* querySelector */

let query = document.querySelector("#task-title");
query.style.background = '#333';
query.style.color = '#fff';
query.style.padding = '6px';
query.style.textAlign="center";

document.querySelector('li').style.color='red';
document.querySelector('li:nth-child(2)').style.color='blue';
document.querySelector('li:nth-child(5)').style.color='orange';
document.querySelector('li').style.color='red';
document.querySelector('.btn').style.color="white";
document.querySelector('a:nth-child(1)').style.color="red";
//document.querySelector('li:nth-child(odd)').style.background='#ccc';
//document.querySelector('li:nth-child(even)').style.background='#f4f4f4';

const collectionItem = document.querySelector('.collection-item');

//console.log(query);


//SELECTING MULTIPLE ELEMENTS 
// const itemCollection = document.getElementsByClassName('collection-item');
// const itemCollection = document.querySelector('ul').getElementsByClassName('collection-item');

// itemCollection[1].style.background = '#000';
// itemCollection[5].style.background = '#f4f4f4';

//console.log(itemCollection);

// const testCollection = document.querySelector('.collection-item-test');
// testCollection.style.background = '#333';
// testCollection.style.color="#fff";
// testCollection.style.padding='10px';
// testCollection.style.textAlign ="center";
// testCollection.style.margin = '0 25px';


/* HTML collectioin is not an array  
CONVERTING HTML COLLECTION INTO ARRAY
*/
let listItem = document.getElementsByTagName('li');

listItem = Array.from(listItem); //converting HTML collection to array
//listItem.reverse();
listItem.forEach(function(list,index){
    //console.log(list);
    //list.textContent = `${index} - I will creat Aminux OS IA`;
})
//console.log(listItem);

/* QuerySelectorALL - returns nodelist
it allows us to use with forEach without converting it*/
//TODO - 1. select multiple elements 2. Loop through multiple elements 3. change color for odd and even lists (use two different loops)

const theMList = document.querySelectorAll('.collection .collection-item');
//console.log(theMList);
//theMList.forEach(item => console.log(item));

//odd list background using forEach
const listOdd = document.querySelectorAll('.collection-item:nth-child(odd)');
listOdd.forEach(oddlist =>oddlist.style.background='#fff');
//evenlist background using forloop
const listEven = document.querySelectorAll('.collection-item:nth-child(even)');
for(let even = 0; even < listEven.length; even++){
    listEven[even].style.background="#fff";
}

//while loop
// let even = 0;
// while(even < listEven.length){
//     listEven[even].style.background="#f03";
//     even++;
    
// }

/* -------------------
 TRAVERSING THE DOM 
 --------------------*/

 const theListCol = document.querySelector('ul.collection');
 const listItems = document.querySelector('li.collection-item:first-child');

 /* Get Child Nodes */

val = theListCol.childNodes;
val = theListCol.childNodes[0];
val = theListCol.childNodes[1];
val = theListCol.childNodes[2].nodeType;
val = theListCol.childNodes[2].nodeName;

/* Node Type Numbers 
--------------------
1. Element
2. Attribute (deprecated)
3.Text node
8.Comment
9.Document itself
10.Doctype*/

/* -------------------
 Get children 
 --------------------*/
 val = theListCol.children;
 val = theListCol.children[3];

console.log(val);
