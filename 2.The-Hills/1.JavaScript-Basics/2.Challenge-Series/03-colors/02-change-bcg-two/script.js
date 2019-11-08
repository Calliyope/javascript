/* becode/javascript
 *
 * /03-colors/02-change-bcg-two/script.js - 3.2: couleur de fond (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.



// the input info retrieval

let colorInfo = document.getElementById("color").value;



// the color choosing logic

const colorChooser = () => {
    if (colorInfo == "red") {
        document.body.style.backgroundColor = "#ff0000";
    } else
    
    if (colorInfo == "blue") {
        document.body.style.backgroundColor = "#0000ff";
    } else

    if (colorInfo == "green") {
        document.body.style.backgroundColor = "#00ff00";
    } else

    if (colorInfo == "yellow") {
        document.body.style.backgroundColor = "#ffff00";
    }
}


(function () {

    // the click event which starts the function  
    document.getElementById("run").addEventListener("click", function () {

        // a console log for me to check it retrieves the input value
        console.log(colorInfo);

        // I attach the colorChooser const to the click event
        colorChooser();

    });
})();

