/* becode/javascript
 *
 * /06-dom/12-change-event-input-two/script.js - 6.12: événement change (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {

    document.getElementById("pass-one").addEventListener('keyup', function () {
        let passInput = document.getElementById("pass-one").value;

        let digitCount = passInput.replace(/[^0-9]/g, "").length;
        console.log(digitCount);

        if (passInput.length >= 8 &&
            (digitCount) >= 2) {
            console.log("ok");
        } else {
            console.log("not ok");
        }
    });
})();