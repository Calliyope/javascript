/* becode/javascript
 *
 * /02-maths/02-calculator-two/script.js - 2.2: calculatrice (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.














// First I need to fetch the value that gets inputted into the operand boxes - I can do this by using the getElementBy Id


// The document get by class below will listen for anytime any button of the operator class is clicked. It should then begin the switch function



//The switch is activated one the class oerator thing above is triggered. now it will search the cases for the id value of the button that was clicked and perform that operation. it will then display the answer as an alert

const doMath = function(buttonId){
    let numberOne = parseInt(document.getElementById("op-one").value);
    let numberTwo = parseInt(document.getElementById("op-two").value);

    switch(buttonId) {
        case "addition":
            alert(numberOne + numberTwo)
            break;

        case "subtraction":
            alert(numberOne - numberTwo)
            break;

        case "multiplication":
            alert(numberOne * numberTwo)
            break;

        case "division":
            alert(numberOne / numberTwo)
            break;
}
}

Array.from(document.getElementsByClassName("operator")).forEach(function(child){
    child.addEventListener("click", function(event) {

        const theClickedButton = event.target;
    
        doMath(theClickedButton.id);
    
    })});