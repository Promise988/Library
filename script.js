// selectors 
let book_name = document.getElementById("book_name");
let book_author = document.getElementById("book_author");
let book_pages = document.getElementById("book_pages");
let book_read = document.getElementById("book_read");
let sub_btn = document.getElementById("sub_btn")


console.log(book_read);

function Book(title, author, pages, read=false) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.sayAll = function() {
        if (read === true) {
            console.log(`book name: ${this.title}, author: ${author}, Pages: ${pages}, I've read the book`)
        } else if (read === false) {
            console.log(`book name: ${this.title}, author: ${author}, Pages: ${pages}, I haven't read the book`)
        }
    }
}

const book1 = new Book("Harry", "Potter", 333);
console.log("-------")
const book2 = new Book("The walking dead", "random", 666, true);
book1.sayAll();
console.log("--------------")
book2.sayAll();


sub_btn.addEventListener("click", function(e) {
    let bnValue = book_name.value;
    let baValue = book_author.value;
    let bpValue = book_pages.value;
    let brValue = book_read.value;
    console.log(bnValue, baValue, bpValue, brValue);
    
})




// let btn = document.getElementById("btn")
// btn.addEventListener("click", function(e) {
//     let x = document.querySelector("#uniqueID").value;
//     console.log(x);
//     askingQuestion.textContent = `${x}`;
// })
