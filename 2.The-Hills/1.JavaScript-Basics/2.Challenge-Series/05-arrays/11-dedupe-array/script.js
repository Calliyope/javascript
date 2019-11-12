/* becode/javascript
 *
 * /05-arrays/11-dedupe-array/script.js - 5.11: dédoublonnement d'un tableau
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {

    var fruits = [
        "cherry",
        "durian",
        "apple",
        "pear",
        "strawberry",
        "tomato",
        "orange",
        "mandarin",
        "strawberry",
        "durian",
        "peach",
        "cherry",
        "grape",
        "cherry",
    ];

    // click event
    
    document.getElementById("run").addEventListener("click", function () {

        // I will use the filter mothod to create a new array which does not include the duplicated frutis

        let uniqueFruits = fruits.filter(function (fruit, index) {
            return fruits.indexOf(fruit) >= index;
        });

        console.log(uniqueFruits);

    });

})();