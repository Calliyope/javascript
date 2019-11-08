/* becode/javascript
 *
 * /03-colors/01-change-bcg-one/script.js - 3.1: couleur de fond (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {

        // First I create the click events and test that they perform the function of console.log when I click them

        document.getElementById("red").addEventListener("click", function () {
            console.log("red");

            //inside the click even I tell the document body style to change the backgroundcolor to red
            document.body.style.backgroundColor = "#ff0000";
        });

        document.getElementById("green").addEventListener("click", function () {
            console.log("green");
            document.body.style.backgroundColor = "#00ff00";
        });
        document.getElementById("yellow").addEventListener("click", function () {
            console.log("yellow");
            document.body.style.backgroundColor = "#ffff00";
        });

        document.getElementById("blue").addEventListener("click", function () {
            console.log("blue");
            document.body.style.backgroundColor = "#0000ff";
        });
})();

