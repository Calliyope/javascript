// First I make the variable wantCake. The first thing it does it ask the user 'Do you want some cake?'
const wantCake = prompt("Do you want some cake? ");

// I start an if statement now. It says IF the user types yes or yeah or Yeah or Yes that an alert will come up that says 'Congrats etc etc'. The 3 === mean an exact match between what the user typed and my pregiven answers. 
if (wantCake === "yes" || wantCake === "yeah" || wantCake === "Yeah" || wantCake === "Yes") {
  alert("Congratulations! You may have some cake");

  //if the user says anything except for those 4 answers, then this ELSE statement will launch which alerts 'More cake etc' 
} else {
  alert("More cake for me then :p !")
}