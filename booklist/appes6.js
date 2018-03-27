//Global variables
const bookTitle = document.getElementById('book_title'),
      author = document.getElementById('author'),
      isbn = document.getElementById('isbn'),
      form = document.getElementById('book-form'),
      firstRow = document.querySelector('.row');
//book class
class Books{
    constructor(title,author,isbn){
        this.bookTitle = title;
        this.author = author;
        this.isbn = isbn;
    }
}
//UI class
class UI{
    addBookToList(book){
        const tBody = document.querySelector('.book-list'),
              tr = document.createElement('tr');
        tBody.appendChild(tr);
        tr.innerHTML = 
        `<td>${book.bookTitle}</td> 
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td><a class="btn-floating red delete"><i class="tiny material-icons">delete</i></a></td>`;
    }
    clearFields(){
        bookTitle.value = '';
        author.value = '';
        isbn.value = '';
    }
    showAlerts(msg,bgcolor,tcolor){
        const alertDiv = document.createElement('div');
        // add padding
        alertDiv.style.padding = '12px';
        //rounded border
        alertDiv.style.borderRadius = '5px';
        //add font-size
        alertDiv.style.fontSize = '17px';
        //add class to the div
        alertDiv.classList = `${bgcolor} lighten-1 ${tcolor}`;
        //add content to the div
        alertDiv.innerHTML = msg;
        firstRow.insertBefore(alertDiv,form);
        //console.log(alertDiv);
        setTimeout(() => { alertDiv.remove(); }, 3000);
    }
}
//static method don't need object initiation
class StoreInLS{
    static getData(){
        let book;
        if(localStorage.getItem('books') === null){
            book = [];
        }else{
            book = JSON.parse(localStorage.getItem('books')); 
        }
        return book;
    }
    static AddbookToLS(books){
        const book = StoreInLS.getData();
        book.push(books);
        localStorage.setItem('books',JSON.stringify(book));
    }
    static displayBooks(){
        const books = StoreInLS.getData();
        books.forEach(function(book){
            const ui = new UI();
            ui.addBookToList(book);
        });
    }
    static removeFromLS(target){
        console.log(target);
        const books = StoreInLS.getData();
        books.forEach(function(book,index){
            if(target){
                //e.target.parentElement.parentElement.parentElement.remove();
                books.splice(index,1);
            }
        })
        localStorage.setItem('books',JSON.stringify(books));
    }
}
//Display books from LS event listener
document.addEventListener('DOMContentLoaded',StoreInLS.displayBooks);

//Add books event listener
form.addEventListener('submit',addBooks);
function addBooks(e){
    const books = new Books(bookTitle.value, author.value,isbn.value);
    //initiate object from UI constructor
    const ui = new UI();
    if(bookTitle.value =='' || author.value == '' || isbn.value == ''){
        //alert("Failed");
        ui.showAlerts('Empty fields are not allowed, fill in the form before you submit','red','white-text');
    }else{
        //add books 
        ui.addBookToList(books);
        // show alert
        ui.showAlerts('You have successfully Added ','green','white-text');
        //add book to LS
        StoreInLS.AddbookToLS(books);
        // clear fields 
        ui.clearFields();
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
    //delete from local storage
    StoreInLS.removeFromLS(e.target.parentElement.classList.contains('delete'));

})
