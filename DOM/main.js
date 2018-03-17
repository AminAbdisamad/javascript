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


//Selecting HTML Elements 
/* getElementById*/
let taskTitle = document.getElementById('task-title');
taskTitle.style.background = '#eee';
taskTitle.style.color = '#333';
taskTitle.style.padding = '10px';
//taskTitle.style.display = 'none';

//changing content
taskTitle.textContent = "Task List";
taskTitle.innerText = "The Task List";
taskTitle.innerHTML ="<span style='color:blue'>Task List</span>"