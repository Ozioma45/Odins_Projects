//1. Translate border-left-width to borderLeftWidthCAMEL-CASED
//Translate border-left-width to borderLeftWidth
//Write the function camelize(str) that changes dash-separated words like “my-short-string” 
//into camel-cased “myShortString”.

//That is: removes all dashes, each word after dash becomes uppercased.
/* const camelize = (str) =>{
    return str
    .split('-') // splits 'my-long-word' into array ['my', 'long', 'word']
    // capitalizes first letters of all array items except the first one
    // converts ['my', 'long', 'word'] into ['my', 'Long', 'Word']
    .map(
        // capitalizes first letters of all array items except the first one
        // converts ['my', 'long', 'word'] into ['my', 'Long', 'Word']
        (word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)
      )
      .join(''); // joins ['my', 'Long', 'Word'] into 'myLongWord'
}

console.log(camelize("ozioma-egole"))

console.log(camelize("background-color") == 'backgroundColor');
console.log(camelize("list-style-image") == 'listStyleImage' );
console.log(camelize("-webkit-transition") == 'WebkitTransition');
 */


//2. Filter range
//Write a function filterRange(arr, a, b) that gets an array arr, looks for elements with values 
//higher or equal to a and lower or equal to b and return a result as an array.

//The function should not modify the array. It should return the new array.

/* function filterRange(arr, a, b){
  // added brackets around the expression for better readability
  return arr.filter(//go through the arr to select those who fit the requirement
    item => // the items to be outputed, which is to fit the function
      (a<= item && item <= b)
  )
}
let arr = [5, 3, 8, 1];

//sort arr
let sorted = arr.sort((a,b)=> a > b ? 1 : -1)

let filtered = filterRange(arr, 1, 4); */

//alert(filtered);
//alert(sorted)


//3. Filter range "in place"
/* //Write a function filterRangeInPlace(arr, a, b) that gets an array arr and 
//removes from it all values except those that are between a and b. The test is: a ≤ arr[i] ≤ b.

//The function should only modify the array. It should not return anything.

function filterRangeInPlace(arr, a, b) {

  for (let i = 0; i < arr.length; i++) {
    let val = arr[i];

    // remove if outside of the interval
    if (val < a || val > b) {
      arr.splice(i, 1);
      i--;
    }
  }

}

let arr = [5, 3, 8, 1];

filterRangeInPlace(arr, 1, 4); // removed the numbers except from 1 to 4

alert( arr ); // [3, 1]
 */


//4. Sort in decreasing order
/* const arr = [5, 2, 1, -10, 8];

// Make a copy of the original array before sorting
const arrCopy = arr.slice();

// Sort the copied array in decreasing order
// ... your code to sort it in decreasing order
const sorted = arrCopy.sort((a,b)=> a > b ? -1 : 1)

console.log(sorted); //5,2,1,-10,8
console.log(arr) */


//5. Copy and Sort arr
//We have an array of strings arr. We’d like to have a sorted copy of it, but keep arr unmodified.
//Create a function copySorted(arr) that returns such a copy.
/* 
let arr = ["HTML", "JavaScript", "CSS"];

let copySorted = arr.slice()

let sorted = copySorted.sort((a,b)=>a > b ? 1 : -1) 

alert( sorted ); // CSS, HTML, JavaScript
alert( arr ); // HTML, JavaScript, CSS (no changes)



//6. Create an extendable calculator
//Create a constructor function Calculator that creates “extendable” calculator objects.

//The task consists of two parts.

//First, implement the method calculate(str) that takes a string like "1 + 2" in the format “NUMBER operator NUMBER” (space-delimited) and returns the result. Should understand plus + and minus -.
//secondly, Then add the method addMethod(name, func) that teaches the calculator a new operation. It takes the operator name and the two-argument function func(a,b) that implements it.

//No parentheses or complex expressions in this task.
//The numbers and the operator are delimited with exactly one space.
//There may be error handling if you’d like to add it.




//Please note how methods are stored. They are simply added to this.methods property.
//All tests and numeric conversions are done in the calculate method. In future it may be extended to 
//support more complex expressions.
//FOR SOLUTION

function Calculator() {


  //tells the computer the system/method to use
  this.methods = {
    "-": (a, b) => a - b,
    "+": (a, b) => a + b
  };

  this.calculate = function(str) {


    //split the string and assign to variables and then, check if the operands are number and if the operator fits the method else it return
    //"NaN(Not a number)""
    //and then returns the operation
    let split = str.split(' '),
      a = +split[0],
      op = split[1],
      b = +split[2];

    if (!this.methods[op] || isNaN(a) || isNaN(b)) {
      return NaN;
    }

    return this.methods[op](a, b);
  };

  //allows the system to add new method
  this.addMethod = function(name, func) {
    this.methods[name] = func;
  };
}

let powerCalc = new Calculator;
powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => a ** b);

let result = powerCalc.calculate("2 ** 3");
alert( result ); // 8 */


//7. Map to names
//You have an array of user objects, each one has user.name. Write the code that converts it into an array of names.
/* let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let users = [ john, pete, mary ];

let names = users.map(item =>item.name)



alert( names ); // John, Pete, Mary */

//8. Map to objects
//You have an array of user objects, each one has name, surname and id.

//Write the code to create another array from it, of objects with id and fullName, 
//where fullName is generated from name and surname.

/* let john = { name: "John", surname: "Smith", id: 1 };
let pete = { name: "Pete", surname: "Hunt", id: 2 };
let mary = { name: "Mary", surname: "Key", id: 3 };

let users = [ john, pete, mary ];

let usersMapped = users.map(user => ({
  fullName: `${user.name} ${user.surname}`,
  id: user.id
}));
/*
usersMapped = [
  { fullName: "John Smith", id: 1 },
  { fullName: "Pete Hunt", id: 2 },
  { fullName: "Mary Key", id: 3 }
]


alert( usersMapped[0].id ) // 1
alert( usersMapped[0].fullName ) // John Smith
 */


//9. Sort users by age
//Write the function sortByAge(users) that gets an array of objects 
//with the age property and sorts them by age.
/* 
let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let arr = [ pete, john, mary ];

const sortByAge = arr.sort((a,b)=> a.age > b.age ? 1 : -1);

/* sortByAge(arr); 

// now: [john, mary, pete]
alert(arr[0].name); // John
alert(arr[1].name); // Mary
alert(arr[2].name); // Pete
 */


//10.Shuffle an array
//Write the function shuffle(array) that shuffles 
//(randomly reorders) elements of the array.

//Multiple runs of shuffle may lead to different orders of elements


/* const shuffle = (arr) => {arr.sort(() =>Math.random() - 0.5
)};


let arr = [1, 2, 3];
shuffle(arr);
alert(arr);

 */
//For instance, consider the code below. It runs shuffle 1000000 times and 
//counts appearances of all possible results:
/* function shuffle(array) {
  array.sort(() => Math.random() - 0.5);
}

// counts of appearances for all possible permutations
let count = {
  '123': 0,
  '132': 0,
  '213': 0,
  '231': 0,
  '321': 0,
  '312': 0
};

for (let i = 0; i < 1000000; i++) {
  let array = [1, 2, 3];
  shuffle(array);
  count[array.join('')]++;
}

// show counts of all possible permutations
for (let key in count) {
  alert(`${key}: ${count[key]}`);
} */

//We can see the bias clearly: 123 and 213 appear much more often than others.

//The result of the code may vary between JavaScript engines, but we can already see that the approach is unreliable.

//Why it doesn’t work? Generally speaking, sort is a “black box”: we throw an array and a comparison 
//function into it and expect the array to be sorted. But due to the utter randomness of the comparison the black 
//box goes mad, and how exactly it goes mad depends on the concrete implementation that differs between engines.

//There are other good ways to do the task. For instance, there’s a great algorithm called Fisher-Yates shuffle. 
//The idea is to walk the array in the reverse order and swap each element with a random one before it:

/* function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1)); // random index from 0 to i

    // swap elements array[i] and array[j]
    // we use "destructuring assignment" syntax to achieve that
    // you'll find more details about that syntax in later chapters
    // same can be written as:
    // let t = array[i]; array[i] = array[j]; array[j] = t
    [array[i], array[j]] = [array[j], array[i]];
  }
} */

//You can still test it with code at line 247-270


//11. Get average age
//Write the function getAverageAge(users) that gets an array of objects with property age and returns the average age.

//The formula for the average is (age1 + age2 + ... + ageN) / N.

/* let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 29 };

let arr = [ john, pete, mary ]; */


//i. write a function that loop through the array 
//ib. and get the age 

//ii. add the ages
//iii. divide by the number of items in the array
/* const getAverageAge = (arr) =>{
  let ages = arr.map(item =>item.age);
  console.log(ages);

  let sum = 0;

  for (let i = 0; i < ages.length; i++ ) {
    sum += ages[i];
  }

  let average = sum / ages.length;

return average;
}

console.log(getAverageAge(arr))

//A much easier method
function getAverageAge(users) {
  return users.reduce((prev, user) => prev + user.age, 0) / users.length;
} */



//12. Filter unique array members
//Let arr be an array.

//Create a function unique(arr) that should return an array with unique items of arr.

/* function unique(arr) {
  let result = [];

  for (let str of arr) {
    if (!result.includes(str)) {
      result.push(str);
    }
  }

  return result;
}

let strings = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

alert( unique(strings) ); // Hare, Krishna, :-O */


//13. Create keyed object from array


//Let’s say we received an array of users in the form {id:..., name:..., age:... }.

//Create a function groupById(arr) that creates an object from it, with id as the key, and array items as values.

/* let users = [
  {id: 'john', name: "John Smith", age: 20},
  {id: 'ann', name: "Ann Smith", age: 24},
  {id: 'pete', name: "Pete Peterson", age: 31},
];

let usersById = groupById(users);

function groupById(array) {
  return array.reduce((obj, value) => {
    obj[value.id] = value;
    return obj;
  }, {})
}
/*
// after the call we should have:

usersById = {
  john: {id: 'john', name: "John Smith", age: 20},
  ann: {id: 'ann', name: "Ann Smith", age: 24},
  pete: {id: 'pete', name: "Pete Peterson", age: 31},
}
*/

// I NO UNDERSTAND THIS LAST ONE OOOO