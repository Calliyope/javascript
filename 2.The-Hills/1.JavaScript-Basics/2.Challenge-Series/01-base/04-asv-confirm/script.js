/* becode/javascript
 *
 * /01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.




let userHasConfirmed;

do
{

  const detailsName = prompt("What is your name?");
  const detailsAge = prompt("What is your age?");
  const detailsGender = prompt("What is your gender?");

  userHasConfirmed = confirm("Are these details correct?\n\nYour name is: " + detailsName + "\nYour age is: " + detailsAge + "\nYour gender is: " + detailsGender);

  if (userHasConfirmed) {
    alert("Thanks!");
  } else {
    alert("Please re-enter your information");
  } 


} while(!userHasConfirmed);