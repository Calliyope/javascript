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

const wrapWithTag = (content, tagname) => `<${tagname}>${content}</${tagname}>`;

//parseTitle means to read the title. If the title starts with the word 'the' then the console will log the name of the movie. it will then make the title into all uppercase and that becomes the new title
const parseTitle = title => {
  title = title.toLowerCase();
  if (title.startsWith(`the`)) {
    console.log(`Film met THE:`, title);
    title = title.toUpperCase();
  }
  return title;
};

//here we are creating a list of the movies, some of which have been parsed and made uppercase. these are joined with all titles with a wrap tag (which are lower case from the above function)
const createList = movies => {
  return `
    <ol>${movies
      .map(movie => parseTitle(movie))
      .map(movie => wrapWithTag(movie, `li`))
      .join(``)}
    </ol>`;
};

document.write(createList(movies));
