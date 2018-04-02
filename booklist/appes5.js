//global variables
// add LS
const bookTitle = document.getElementById('book_title'),
      author = document.getElementById('author'),
      isbn = document.getElementById('isbn'),
      form = document.getElementById('book-form'),
      firstRow = document.querySelector('.row');
//constructor for books
function Books(title,author,isbn){
    this.title = title;
    this.author = author;
    this.isbn = isbn;
}
//constructor for UI
function UI(){}
//create prototype
UI.prototype.createTable = function(){
    const tBody = document.querySelector('.book-list'),
          tr = document.createElement('tr');
    tBody.appendChild(tr);
    tr.innerHTML = 
    `<td>${bookTitle.value}</td> 
    <td>${author.value}</td>
    <td>${isbn.value}</td>
    <td><a class="btn-floating red delete"><i class="tiny material-icons">delete</i></a></td>`;
    
}
//event listener
form.addEventListener('submit',addBooks);
function addBooks(e){
    //initiate object from Books constructor
    const books = new Books(bookTitle.value, author.value,isbn.value);
    //initiate object from UI constructor
    const ui = new UI();
    console.log(ui);
    if(bookTitle.value =='' || author.value == '' || isbn.value == ''){
        //alert("Failed");
        ui.showAlerts('Empty fields are not allowed, fill in the form before you submit','red','white-text');
    }else{
        //add books
        ui.createTable();
        // show alert
        ui.showAlerts('You have successfully Added ','green','white-text');
        // clear fields 
        ui.clear();
    }
    
    e.preventDefault();
}
//delete event listener
document.addEventListener('click',function(e){
    const ui = new UI();
    if(e.target.parentElement.classList.contains('delete')){
        e.target.parentElement.parentElement.parentElement.remove();
        ui.showAlerts(`You have successfully deleted` ,'green','white-text');
    }
})

//clear constructor
UI.prototype.clear = function(){
    bookTitle.value = '';
    author.value = '';
    isbn.value = '';
}
//clear alerts
UI.prototype.showAlerts = function(msg,bgcolor,tcolor){
    const alertDiv = document.createElement('div');
    // add padding
    alertDiv.style.padding = '12px';
    //rounded border
    alertDiv.style.borderRadius = '5px';
    //input field border
    bookTitle.style.borderColor = bgcolor;
    author.style.borderColor = bgcolor;
    isbn.style.borderColor = bgcolor;
    //add font-size
    alertDiv.style.fontSize = '17px';
    //add class to the div
    alertDiv.classList = `${bgcolor} ${tcolor}`;
    //add content to the div
    alertDiv.innerHTML = msg;
    firstRow.insertBefore(alertDiv,form);
    //console.log(alertDiv);
    setTimeout(() => {
        alertDiv.remove();
    }, 3000);


}