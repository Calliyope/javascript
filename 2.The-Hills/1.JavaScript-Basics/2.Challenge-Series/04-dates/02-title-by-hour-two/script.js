/* becode/javascript
 *
 * /04-dates/02-title-by-hour-two/script.js - 4.2: texte en fonction de l'heure (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    (function() {

        // get current date/time
        
        let datetimeNow = new Date();
        console.log(datetimeNow);
        
        
        
        // make an if for the two options = before 17:30 it will say hello, after 17:30 it will say good evening 
        
        if (datetimeNow.getHours() < 17.5) {
            document.getElementById("target").innerHTML = "Hello!";
        }
        
        if (datetimeNow.getHours() > 17.5) {
            document.getElementById("target").innerHTML = "Good Evening!"
        }
        })();

})();
