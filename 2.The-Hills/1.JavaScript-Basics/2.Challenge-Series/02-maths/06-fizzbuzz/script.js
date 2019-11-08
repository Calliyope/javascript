/* becode/javascript
 *
 * /02-maths/06-fizzbuzz/script.js - 2.6: fizzbuzz
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here

})();




// Make an array of 1-100

const numbersStart = 0;
const numbersEnd = 100;

const arr = [];

for (var i = numbersStart; i <= numbersEnd; i++) {

     arr.push(i);
}

console.log(arr);


// Possibility one 

const getFizzBuzzValue = (number) => {
  
  if(number % 3 == 0 && number % 5 == 0) {
    return "FizzBuzz";
  } else 
  if(number % 3 == 0) {
    return "Fizz";
  }
  else if(number % 5 == 0){
    return "Buzz";
  }
  else {
    return number;
  }
};

// Possibility two - more condensed as fizz and buzz only need to be written once

const getFizzBuzzValue2 = (number) => {
  var resultValue = "";

  if(number % 3 == 0) {
    resultValue += "Fizz";
  }

  if(number % 5 == 0) {
    resultValue += "Buzz";
  }

  if(resultValue === "") {
    return number;
  }
  else {
    return resultValue
  }
};

// This maps the array and attached the getFizzBuzzValue

var output = arr.map(number => getFizzBuzzValue(number));

console.log(output);






