var swiper = new Swiper(".slide-content", {
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

  //duplicating the div
  
  function change(){
    //Getting the div to be cloned
    const target = document.getElementById("main-card");

    /*creates a new element (copyElement) that is an exact replica of the target element, including 
    all of its child elements and their contents. It effectively duplicates the entire structure and content within */
    const copyElement = target.cloneNode(true);

    // Access the paragraph element within the cloned div
    const paragraphInClone = copyElement.querySelector("p");

// Update the text content of the paragraph
  paragraphInClone.textContent = "New text for the paragraph";

    document.getElementById("wrap").appendChild(copyElement);
  }