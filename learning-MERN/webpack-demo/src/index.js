import _ from "lodash";
// import your function
import myName from "./myName";

function component() {
  const element = document.createElement("div");

  // use your function!
  element.textContent = myName("Cody");

  //add style
  element.classList.add("hello");

  return element;
}

document.body.appendChild(component());
