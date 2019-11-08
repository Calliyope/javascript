/* becode/javascript
 *
 * /04-dates/05-get-spooky-fridays/script.js - 4.5: calcul des vendredi 13
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {

    document.getElementById("run").addEventListener("click", function () {

        function numberOfFridaythe13thsIn(year) {
            let count = 0;
            for (let month = 0; month < 12; month++) {
                let d = new Date(year, month, 13);
                if (d.getDay() == 5) {
                    count++;
                }
            }
            return count;
        }
        let numberOf13s = parseInt(document.getElementById("year").value);
        alert(numberOfFridaythe13thsIn(numberOf13s));
    });
})();