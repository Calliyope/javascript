/* becode/javascript
 *
 * /04-dates/01-title-by-hour-one/script.js - 4.1: texte en fonction de l'heure (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

// get current date/time

let datetimeNow = new Date();
console.log(datetimeNow);



// make an if for the two options = before 18:00 it will say hello, after 18:00 it will say good evening 

if (datetimeNow.getHours() < 18) {
    document.getElementById("target").innerHTML = "Hello!";
}

if (datetimeNow.getHours() > 18) {
    document.getElementById("target").innerHTML = "Good Evening!"
}
})();






