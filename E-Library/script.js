const addBtn = document.getElementById('addBtn');
const dialog = document.querySelector("dialog");
const closeButton = document.querySelector(".close-btn");



//to show the dialog 
addBtn.addEventListener("click", () => {
  dialog.showModal();
});

//to close the dialog
closeButton.addEventListener("click", () => {
dialog.close();
});

 const myLibrary = [];

 function Book(title, author, pages)  {
  // the constructor.. .

  this.title = title;
   this.author = author;
   this.pages = pages;
}

 //function to add a new book to the library
 function addBookToLibrary() {
   // do stuff here

   // Prompt the user for book information
    const title = prompt('Enter the book title:');
    const author = prompt('Enter the author:');
    const pages = parseInt(prompt('Enter the number of pages:'));

    // Create a new book object
    const newBook = new Book(title, author, pages);

    // Add the new book to the library array
    myLibrary.push(newBook);

    //to display the new book
    displayNewBook(newBook);
 }

 



const displayNewBook = (newBook) =>{
  //Getting the div to be cloned
  const target = document.getElementById("main-card");

  /*creates a new element (copyElement) that is an exact replica of the target element, including 
  all of its child elements and their contents. It effectively duplicates the entire structure and content within */
 const copyElement = target.cloneNode(true);

  // Access the elements and changing their values
 const bTitle = copyElement.querySelector("#bTitle");
 const bAuthor = copyElement.querySelector(".bAuthor")
 const bPages = copyElement.querySelector(".bPages")

// Update the text content of the paragraph
  bTitle.textContent = newBook.title;
  bAuthor.textContent = newBook.author;
  bPages.textContent = newBook.pages;

  document.getElementById("wrap").appendChild(copyElement);
 }


 var swiper = new swiper(".slide-content", {
  slidesPerView: 1,
  centeredSlides: false,
  slidesPerGroupSkip: 1,
  grabCursor: true,
  keyboard: {
    enabled: true,
  },
  breakpoints: {
    769: {
      slidesPerView: 2,
      slidesPerGroup: 2,
    },
  },
  scrollbar: {
    el: ".swiper-scrollbar",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});


