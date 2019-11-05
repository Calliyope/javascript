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

// I have made 3 new arrays. Each array takes one property of the above master array (oscarWinners) and maps it. 

const oscarActors = oscarWinners.map(oscarWinner => oscarWinner.actor);

const oscarFilms = oscarWinners.map(oscarWinner => oscarWinner.film);

const oscarAges = oscarWinners.map(oscarWinner => oscarWinner.age);



// Checking my new arrays work - they do.

console.log(oscarActors);
console.log(oscarFilms);
console.log(oscarAges);



// The tagging script.

const wrapWithTag = (content, tagname) => `<${tagname}>${content}</${tagname}>`;



// I sorted the master array to be sorted by the age of the actor = oldest being first

const sortByAge = (a, b) => {
    return a.age - b.age;
};

oscarWinners.sort(sortByAge)



// Creating the list for display.

document.write(`<ul>`);
oscarWinners.forEach(winner => document.write(wrapWithTag(winner, `li`)));
document.write(`</ul>`);




// Here I sum up the ages (values in the oscarAges array) and display it to the console.
const add = (a,b) => a + b;

const sum = oscarAges.reduce(add);
console.log(oscarAges);

