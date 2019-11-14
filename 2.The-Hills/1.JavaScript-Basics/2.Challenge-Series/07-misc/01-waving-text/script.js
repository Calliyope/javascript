/* becode/javascript
 *
 * /07-misc/01-waving-text/script.js - 7.1: effet vague
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {

    let targetText = document.getElementById("target").textContent;

    console.log(targetText);

    let letters = targetText.charAt(60)

    console.log(letters);

    // I need to loop through the string of letters (targetText) using the charAt function and for each one set a different font size. The loop should ascend for 5 characters and descend for the next 5, repeating that process. The output should be wavy text. 

})();