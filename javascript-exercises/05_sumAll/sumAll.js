const sumAll = function(num1,num2) {
    if (typeof num1 !== 'number' || isNaN(num1) || num1 < 1 || typeof num2 !== 'number' || isNaN(num2) || num2 < 1) {
        return "ERROR";
      }
      if (num1 < num2) {
        [num1, num2] = [num2, num1];
      }
      let sum = 0;
      for (let i = num2; i <= num1; i++) {
        sum += i;
      }
      return sum;
};

// Do not edit below this line
module.exports = sumAll;

  