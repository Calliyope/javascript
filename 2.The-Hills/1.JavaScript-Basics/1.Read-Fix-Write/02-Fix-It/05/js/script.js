const shows = [
  `legion`,
  `sneaky pete`,
  `santa clarita diet`,
  `riverdale`,
  `the young pope`,
  `a series of unfortunate events`,
  `taboo`,
  `colony`,
  `24: legacy`,
  `speechless`,
  `scherlock`,
  `stranger things`,
  `this is us`,
  `timeless`,
  `the oa`,
];

const wrapWithTag = (content, tagname) => `<${tagname}>${content}</${tagname}>`;

const writeTitle = title => {
  const newTitle = uCFirst(title);
  document.write(wrapWithTag(newTitle, `li`));
};

const uCFirst = sentence => {
  const words = sentence.split(` `);
  const upperCase = words.map(word => word.charAt(0).toUpperCase() + word.slice(1)); // The slice() method returns the selected elements in an array, as a new array object. The slice() method selects the elements starting at the given start argument, and ends at, but does not include, the given end argument.
  return upperCase.join(' ');
};
// join - the elements will be separated by a specified separator. The default separator is comma (,). here I specified it to be a space by using ' '


document.write(`<ol>`);
shows.forEach(show => writeTitle(show));
document.write(`</ol>`);
