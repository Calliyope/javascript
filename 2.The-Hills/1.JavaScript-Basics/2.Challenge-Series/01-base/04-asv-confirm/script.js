// let is another way to make a variable. let is different from const because a let variable can be altered by the upcoming code. A const stays constant. 
let userHasConfirmed;

// I start a do here. It means it will DO the following things: make the detailsName/Age/Gender  variables. It then makes a userHasConfirmed 'confirm' prompt where it employs the fresh variables to ask if they user agrees. 
do {

  const detailsName = prompt("What is your name?");
  const detailsAge = prompt("What is your age?");
  const detailsGender = prompt("What is your gender?");

  userHasConfirmed = confirm("Are these details correct?\n\nYour name is: " + detailsName + "\nYour age is: " + detailsAge + "\nYour gender is: " + detailsGender);


  // Now I make an if insie the do. It asks IF the user confirms then it will alert them with a thanks message. If ELSE then it asks for a reenter. 
  if (userHasConfirmed) {
    alert("Thanks!");
  } else {
    alert("Please re-enter your information");
  }

  // This WHILE is part of the DO started above. It states that while the user has not (!) met the conditions of the userHasConfirmed variable, the DO loop will continue forever. Once the user agrees/confirms, the DO WHILE will stop. 

} while (!userHasConfirmed);