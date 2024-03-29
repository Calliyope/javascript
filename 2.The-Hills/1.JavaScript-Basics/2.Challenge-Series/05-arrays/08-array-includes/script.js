/* becode/javascript
 *
 * /05-arrays/08-array-includes/script.js - 5.8: présence dans un tableau
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {

    var fruits = [
        "apple",
        "pear",
        "strawberry",
        "tomato",
        "kiwi",
        "banana",
        "orange",
        "mandarin",
        "durian",
        "peach",
        "grapes",
        "cherry",
    ];

    // I can use the includes array method to test if this array has the value 'apple' in it
    document.getElementById("run").addEventListener("click", function () {

        // I can use the includes array method to test if this array has the value 'apple' in it
        console.log(fruits.includes("apple"));
    });

})();