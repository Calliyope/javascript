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

const wrapWithTag = (content, tagname) => `<${tagname}>${content}</${tagname}>`;

// ok here, the movie const is being segmented and wrapped in tags which make it a p element. example, the movie, title becomes a p and then also the movie and year becomes a p. only the second part of the brackets will be displayed. 
const parseMovieData = movie =>
  wrapWithTag(movie.title, `p`) +
  wrapWithTag(movie.year, `p`) +
  wrapWithTag(movie.director, `p`);

  //the list is created by making a map of all tagged items which is now all items and making them li elements
const createList = movies => {
  return `<ul>${movies
    .map(movie => wrapWithTag(parseMovieData(movie), `li`))
    .join(``)
  }</ul>`;
};

//here the list is displayed on the screen
document.write(createList(movies));
