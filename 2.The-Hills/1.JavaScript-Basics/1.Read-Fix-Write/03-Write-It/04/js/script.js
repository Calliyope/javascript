// The master array is defined first

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




//  I make a new array consiting of only the surnames of the actor property of the oscarWinners array. 

const oscarSurnames = oscarWinners.map(oscarWinner => oscarWinner.actor.split(' ')[1])




// Then I log to check it works

console.log(oscarSurnames);




// Now I sort the list alphabeticaly

oscarSurnames.sort()



// Creating the list for display.

document.write(`<ul>`);
oscarSurnames.forEach(winner => document.write(wrapWithTag(winner, `li`)));
document.write(`</ul>`);



























