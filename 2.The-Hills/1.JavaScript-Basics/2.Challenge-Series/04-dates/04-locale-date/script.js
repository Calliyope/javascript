/* becode/javascript
 *
 * /04-dates/04-locale-date/script.js - 4.4: date textuelle
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

// Get the current date

let datetimeNow = new Date();
console.log(datetimeNow);



// parse the date info into the desired readable format

const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

// display the nice new date in the html

document.getElementById("target").innerHTML = datetimeNow.toLocaleDateString('en-EN', options);
})();


