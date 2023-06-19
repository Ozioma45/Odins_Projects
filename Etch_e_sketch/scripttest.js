function randomColor() {
    const gridElements = document.getElementsByClassName("grid-element");
    for (let i = 0; i < gridElements.length; i++) {
      gridElements[i].addEventListener("mouseover", rainbow);
    }
  }
  

  function rainbow(e) {
    const randomR = Math.floor(Math.random() * 256);
    const randomG = Math.floor(Math.random() * 256);
    const randomB = Math.floor(Math.random() * 256);
    e.target.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`;
  }
  