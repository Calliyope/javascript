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

//This wraps the titles of the movies with a tag which is used later to change tagged items
const wrapWithTag = (content, tagname) => {
  return `<${tagname}>${content}</${tagname}>`;
};
// In other words, wrapWithTag("hello", "h1") returns "<h1>hello</h1>"


//This takes the title and performs the tolowercase function on any value wrapped in a tag (which was done above) and then write the wrapped result as a li
const parseTitle = title => {
  const lowerTitle = title.toLowerCase();
  const wrapped = wrapWithTag(lowerTitle, `li`);
  document.write(wrapped);
};


//for each 'movie' - designated at the top - perform the 'parseTitle' above
document.write(`<ol>`);
movies.forEach(movie => parseTitle(movie));
document.write(`</ol>`);
