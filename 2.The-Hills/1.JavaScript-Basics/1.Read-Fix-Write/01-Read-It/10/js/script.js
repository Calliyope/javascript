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

//creating the wrap with tag const which will be referred to later
const wrapWithTag = (content, tagname) => `<${tagname}>${content}</${tagname}>`;

// making a const with the titles being only the ones starting with the
const startsWithThe = title => title.startsWith(`the`);

// making a list of movies which returns an ol constructed from the movies constant, the movies made all into lower case, then filtered for ones starting with the, then wrapped with the tag and made into a list item, then joined together
const createList = movies => {
  return `
    <ol>${movies
      .map(movie => movie.toLowerCase())
      .filter(startsWithThe)
      .map(movie => wrapWithTag(movie, `li`))
      .join(``)}
    </ol>`;
};

// the list is displayed on the screen
document.write(createList(movies));
