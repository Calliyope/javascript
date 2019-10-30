
//more info has been provided here. the movie constant now also contains a title, year and director sub constant?
const movies = [
  {
    title: `The Godfather`,
    year: 1972,
    director: `Francis Ford Coppola`,
  }, {
    title: `The Shawshank Redemption`,
    year: 1994,
    director: `Frank Darabont`,
  }, {
    title: `Schindler's List`,
    year: 1993,
    director: `Steven Spielberg`,
  }, {
    title: `Raging Bull`,
    year: 1980,
    director: `Martin Scorsese`,
  }, {
    title: `Casablanca`,
    year: 1942,
    director: `Michael Curtiz`,
  }, {
    title: `Citizen Kane`,
    year: 1941,
    director: `Orson Welles`,
  }, {
    title: `Gone with the Wind`,
    year: 1939,
    director: `Victor Fleming`,
  }, {
    title: `The Wizard of Oz`,
    year: 1939,
    director: `Victor Fleming`,
  }, {
    title: `One Flew Over the Cuckoo's Nest`,
    year: 1975,
    director: `Milos Forman`,
  }, {
    title: `Lawrence of Arabia`,
    year: 1962,
    director: `David Lean`,
  },
];

//tagging constant for later
const wrapWithTag = (content, tagname) => `<${tagname}>${content}</${tagname}>`;

//the list is created bu returning movies after they've been made lower case and the wrapped as list items and then joined. The selector which says to only show the title is on line 54 => movie.TITLE to lower case
const createList = movies => {
  return `
    <ol>${movies
    .map(movie => movie.title.toLowerCase())
    .map(title => wrapWithTag(title, `li`))
    .join(``)}
    </ol>`;
};


document.write(createList(movies));
