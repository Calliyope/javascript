const movies = [
  `The Godfather`,
  `The Shawshank Redemption`,
  `Schindler's List`,
  `Raging Bull`,
  `Casablanca`,
  `Citizen Kane`,
  `Gone with the Wind`,
  `The Wizard of Oz`,
  `One Flew Over the Cuckoo's Nest`,
  `Lawrence of Arabia`,
];

//Wrap the movies with a tag
const wrapWithTag = (content, tagname) => `<${tagname}>${content}</${tagname}>`;

//the const lowerCaseMovies gets made here by makign a map (array) of the movies and then performing the funtion = to lower case
const lowerCaseMovies = movies.map(movie => movie.toLowerCase());
const wrappedMovies = lowerCaseMovies.map(movie => wrapWithTag(movie, `li`));
//above here the wrapped movies const is made by making a map of the new lower case movies and then making them a li

document.write(wrapWithTag(wrappedMovies.join(``), `ol`));
//above the document writes the wrapped movies to an ol