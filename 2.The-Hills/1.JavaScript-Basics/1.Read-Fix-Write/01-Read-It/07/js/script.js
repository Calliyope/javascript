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

// Wrapping the movies in a tag
const wrapWithTag = (content, tagname) => `<${tagname}>${content}</${tagname}>`;

//creating a new const called lowerCaseMovies by taking the movies and creating a map/array with the movie titles changed to lower case
const lowerCaseMovies = movies.map(movie => movie.toLowerCase());

//writes an ol with the tagged movies (which have now also been made lowercase) as the li
document.write(`<ol>`);
lowerCaseMovies.forEach(movie => document.write(wrapWithTag(movie, `li`)));
document.write(`</ol>`);
