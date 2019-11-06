const oscarWinners = [
    {
      actor: "Forest Whitaker",
      film: "The Last King of Scotland",
      age: 45
    }, {
      actor: "Daniel Day-Lewis",
      film: "There Will Be Blood",
      age: 50
    }, {
      actor: "Sean Penn",
      film: "Milk",
      age: 48
    }, {
      actor: "Jeff Bridges",
      film: "Crazy Heart",
      age: 60
    }, {
      actor: "Colin Firth",
      film: "The King's Speech",
      age: 50
    }, {
      actor: "Jean Dujardin",
      film: "The Artist",
      age: 39
    }, {
      actor: "Daniel Day-Lewis",
      film: "Lincoln",
      age: 55
    }, {
      actor: "Matthew McConaughey",
      film: "Dallas Buyers Club",
      age: 44
    }, {
      actor: "Eddie Redmayne",
      film: "The Theory of Everything",
      age: 33
    }, {
      actor: "Leonardo DiCaprio",
      film: "The Revenant",
      age: 41
    }
  ]

// The tagging script.

const wrapWithTag = (content, tagname) => `<${tagname}>${content}</${tagname}>`;



// I sorted the master array to be sorted by the age of the actor = oldest being first

const sortByAge = (a, b) => {
  return -1 * (a.age - b.age);
};

oscarWinners.sort(sortByAge)



// Creating the list for display.

document.write(`<ul>`);
oscarWinners.forEach(winner => document.write(wrapWithTag(winner.actor, `li`)));
document.write(`</ul>`);




// Here I sum up the ages (values in the oscarAges array) and display it to the console.
const add = (a,b) => a + b;

const sum = oscarAges.reduce(add);
console.log(sum);





// CONDENSED SOLUTION


// var sortedByAge = oscarWinners.sort(ow => ow.age * -1);

// document.write(`<ul>`);
// sortedByAge.forEach(ow => document.write(wrapWithTag(ow.actor, `li`)));
// document.write(`</ul>`);

// console.log(sortedByAge);


// const add2 = (a,b) => a + b.age;

// const sum2 = oscarWinners.reduce(add2, 0);
// console.log(sum2);



// A reminder about how the reduce function works in practise

// var numbers = [175, 50, 25];

// var outcome = numbers.reduce((theOutComeOfLastTime,theCurrentValue) => theOutComeOfLastTime - theCurrentValue, 0);

// console.log("outcome = " + outcome);

























// var sortedByAge = oscarWinners.sort(ow => ow.age * -1);

// document.write(`<ul>`);
// sortedByAge.forEach(ow => document.write(wrapWithTag(ow.actor, `li`)));
// document.write(`</ul>`);

// console.log(sortedByAge);



