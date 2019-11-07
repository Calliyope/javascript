/* becode/javascript
 *
 * /02-maths/03-even-square/script.js - 2.3: carrés des pairs
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.


// 1. make a function to check if a number is a square

const isSquare = function (n) {
    return Math.sqrt(n) % 1 === 0;
};

// 2. make a function which will mean the button is used to trigger the code
(function() {

    document.getElementById("run").addEventListener("click", function() {

        // 3. make an array
        const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21];

        // 4. map the array using the isSquare function to check the true false values of the numbers in the array
        const squareOrNot = numbers.map(isSquare);

        // 5. check the values
        console.log(squareOrNot);  
        
        // 6. filter the numbers array for values which pass the isSquare function
        const squares = numbers.filter(isSquare);

        // 7. show the numbers in an alert
        alert(squares);

      }

)})();

