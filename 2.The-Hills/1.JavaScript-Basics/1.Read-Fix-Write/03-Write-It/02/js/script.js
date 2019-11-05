// Create the shows list array

const shows = [
  `Hors normes`,
  `The Mustang`,
  `Joker`,
  `Downton Abbey`,
  `Parasite`,
  `La Ragazza Nella Nebbia`,
  `Once Upon a Time… in Hollywood`,
  `Au Nom de la Terre`,
  `Itzhak`,
  `Everest: De Jonge Yeti`,
  `Minuscule 2: Het Tropisch Avontuur`,
  `De Leeuwenkoning`,
];


// Create the const 'tagged' so that I can easily wrap items in li tags

const wrapWithTag = (content, tagname) => `<${tagname}>${content}</${tagname}>`;

// Here I make the titles of the shows into lowercase
const lowerCaseShows = shows.map(function (show) { return show.toLowerCase(); });

// i used a simple reverse as noone else will be using the lowerCaseShows array for any other purpose

lowerCaseShows.reverse();

// document.write will publish a ul to the page. inside the ul i ask the new array of lowerCaseShows to run and then wrap them with tagss and create our list again

document.write(`<ul>`);
lowerCaseShows.forEach(show => document.write(wrapWithTag(show, `li`)));
document.write(`</ul>`);

