const EnterLib = document.getElementById("entLib");

EnterLib.addEventListener("click", enterLibr);

function enterLibr() {
  const userInput = document.getElementById("userInput").value;
  const userName = document.getElementById("userName");
  const mainSec = document.getElementById("main");
  const userNList = document.querySelectorAll(".user");

  if (!userInput) {
    alert("Please input your name.");
  } else {
    userNList.forEach((userN) => {
      userN.innerText = userInput;
    });

    userName.classList.add("d-none");
    mainSec.classList.remove("d-none");

    // Save userInput, userName state, and mainSec state in localStorage
    localStorage.setItem("userInput", userInput);
    localStorage.setItem(
      "userNameState",
      userName.classList.contains("d-none")
    );
    localStorage.setItem("mainSecState", !mainSec.classList.contains("d-none"));
  }
}

//const addBtn = document.getElementById('addBtn');

class Book {
  constructor(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
  }
}

let myLibrary = [];

// Add an event listener to the "Reset" button
document.querySelectorAll(".resetButton").forEach(function (button) {
  button.addEventListener("click", function () {
    // Remove the "myLibrary" item from local storage
    localStorage.removeItem("myLibrary");

    // Clear user-related values from local storage
    clearLocalStorageUserValues();

    const mainSec = document.getElementById("main");
    const userName = document.getElementById("userName");

    mainSec.classList.add("d-none");
    userName.classList.remove("d-none");

    // Reload the page to its default settings
    resetPage();
  });
});

// Function to clear user-related values from local storage
function clearLocalStorageUserValues() {
  localStorage.removeItem("userInput");
  localStorage.removeItem("userNameState");
  localStorage.removeItem("mainSecState");
}

// Function to reset the page to its default settings
function resetPage() {
  // Reload the page
  location.reload();
}

const displayNewBook = (newBook, index) => {
  //Getting the div to be cloned
  const target = document.getElementById("main-card");

  //creates a new element (copyElement) that is an exact replica of the target element, including
  //all of its child elements and their contents. It effectively duplicates the entire structure and content within
  const copyElement = target.cloneNode(true);

  copyElement.classList.remove("hide"); //to make the newly created element visible

  const readBtn = copyElement.querySelector(".read-btn");
  const nReadBtn = copyElement.querySelector(".nRead-btn");

  readBtn.addEventListener("click", () => {
    readBtn.classList.add("hide");
    nReadBtn.classList.remove("hide");
  });

  nReadBtn.addEventListener("click", () => {
    readBtn.classList.remove("hide");
    nReadBtn.classList.add("hide");
  });

  // Access the "Delete" button within the cloned div
  const deleteButton = copyElement.querySelector(".del-btn");

  // Add an event listener to the "Delete" button
  deleteButton.addEventListener("click", () => {
    // Remove the corresponding cloned div
    copyElement.remove();

    // Remove the book from the library and update the display
    myLibrary.splice(index, 1);

    // Store the updated library array in localStorage
    localStorage.setItem("myLibrary", JSON.stringify(myLibrary));

    reloadPage(); // Call the function to reload the page
  });

  // Access the elements and changing their values
  const bTitle = copyElement.querySelector("#bTitle");
  const bAuthor = copyElement.querySelector(".bAuthor");
  const bPages = copyElement.querySelector(".bPages");

  // Update the text content of the paragraph
  bTitle.textContent = newBook.title;
  bAuthor.textContent = newBook.author;
  bPages.textContent = newBook.pages;

  document.getElementById("wrap").appendChild(copyElement);
};

// Retrieve data from localStorage when the page loads
if (localStorage.getItem("myLibrary")) {
  myLibrary = JSON.parse(localStorage.getItem("myLibrary"));
  // Display books from localStorage
  myLibrary.forEach(displayNewBook);
}

// Restore user input and states from localStorage
const savedUserInput = localStorage.getItem("userInput");
if (savedUserInput) {
  const userNList = document.querySelectorAll(".user");

  userNList.forEach((userN) => {
    userN.innerText = savedUserInput;
  });

  const userNameState = localStorage.getItem("userNameState") === "true";
  const mainSecState = localStorage.getItem("mainSecState") === "true";

  const userName = document.getElementById("userName");
  const mainSec = document.getElementById("main");

  if (userNameState) {
    userName.classList.add("d-none");
  }

  if (mainSecState) {
    mainSec.classList.remove("d-none");
  }
}

//get reference to the element and dialog
const form = document.getElementById("myform");
const dialog = document.querySelector("dialog");
const showButton = document.querySelector("#show-login");
const closeButton = document.querySelector(".close-btn");
const subBtn = document.getElementById("subBtn");

// "Show the dialog" button opens the dialog modally
addBtn.addEventListener("click", () => {
  dialog.showModal();
});

// "Close" button closes the dialog
closeButton.addEventListener("click", () => {
  dialog.close();
});

subBtn.addEventListener("click", () => {
  // Get user input
  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const pages = document.getElementById("Pages").value;

  // Create a new book object
  const newBook = new Book(title, author, pages);

  // Add the new book to the library array
  myLibrary.push(newBook);

  // Store the updated library array in localStorage
  localStorage.setItem("myLibrary", JSON.stringify(myLibrary));

  //to display the new book
  displayNewBook(newBook);

  // Reset the form by setting input values to an empty string
  document.getElementById("title").value = "";
  document.getElementById("author").value = "";
  document.getElementById("Pages").value = "";

  reloadPage(); // Call the function to reload the page

  // Close the dialog
  dialog.close();
});

function reloadPage() {
  location.reload();
}
