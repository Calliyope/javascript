const doMath = function (buttonId) {
    let numberOne = parseInt(document.getElementById("op-one").value);
    let numberTwo = parseInt(document.getElementById("op-two").value);

    switch (buttonId) {
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

Array.from(document.getElementsByClassName("operator")).forEach(function (child) {
    child.addEventListener("click", function (event) {

        const theClickedButton = event.target;

        doMath(theClickedButton.id);

    })
});