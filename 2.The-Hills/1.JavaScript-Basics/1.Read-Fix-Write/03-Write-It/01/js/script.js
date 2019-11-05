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


// document.write will publish a ul to the page. inside the ul i ask the shows array that for each show (here is where i create the show) that it will write the tagged items (using the function made above)

document.write(`<ul>`);
shows.forEach(show => document.write(wrapWithTag(show, `li`)));
document.write(`</ul>`);

