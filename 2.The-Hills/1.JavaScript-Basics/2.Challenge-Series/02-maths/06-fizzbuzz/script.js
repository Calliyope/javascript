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

const numbersStart = 1;
const numbersEnd = 100;

const arr = [];

for (var i = numbersStart; i <= numbersEnd; i++) {

     arr.push(i);
}

console.log(arr);




// Make a tester for if numbers are a multiple of 3 or 5

const test35 = function (x) 
{
  if (x % 3 == 0 || x % 5 == 0) 
  {
    return true;
  } 
  else {
    return false;
  }
}

console.log(test35(arr));





