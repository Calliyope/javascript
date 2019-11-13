/* becode/javascript
 *
 * /06-dom/09-match-password-one/script.js - 6.9: vérification de mots de passe (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {

    //click event
    document.getElementById("run").addEventListener("click", function () {

        // get input value of box one
        let inputOne = document.getElementById("pass-one").value;

        // get input value of box 2
        let inputTwo = document.getElementById("pass-two").value;

        //check i have the values
        console.log(inputOne)
        console.log(inputTwo)


        // if loop which makes the boxes green if they match and red if they do not
        if (`${inputOne}` === `${inputTwo}`) {
            document.getElementById("pass-one").setAttribute("style", "border: 10px solid green");
            document.getElementById("pass-two").setAttribute("style", "border: 10px solid green");
        } else {
            document.getElementById("pass-two").setAttribute("style", "border: 10px solid red");
            document.getElementById("pass-one").setAttribute("style", "border: 10px solid red");
        }
    });
})();