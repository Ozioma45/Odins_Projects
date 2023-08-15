const add = function(a,b) {
  let c = a + b;
  return c; 
};

const subtract = function(a,b) {
	let c = a - b;
  return c
};

const sum = function(arr) {

// removed initial value from reduce (no 0)
let result = arr.reduce((sum, current) => sum + current,0);

return result; 
};

const multiply = function(arr) {
  var pro = 1;
  for (i = 0; i < arr.length; i++)
      pro = pro * arr[i];
  return pro;
};

const power = function(a,b) {
	let c = a ** b;
  return c
};

const factorial = function(num) {
	var result = num;
  if (num === 0 || num === 1) 
    return 1; 
  while (num > 1) { 
    num--;
    result *= num;
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
