/* becode/javascript
 *
 * /06-dom/11-change-event-input-one/script.js - 6.11: événement change (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {
    let i = 0;

    document.getElementById("pass-one").addEventListener('keyup', function () {

        i++
        console.log(i);

        if (+i === +10) {

            document.getElementById("pass-one").disabled = true;

        }
    });


})();