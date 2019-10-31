const shows = [
  {
    title: `legion`,
    season: 1,
    score: 94,
  }, {
    title: `sneaky pete`,
    season: 1,
    score: 100,
  }, {
    title: `santa clarita diet`,
    season: 1,
    score: 71,
  }, {
    title: `riverdale`,
    season: 1,
    score: 87,
  }, {
    title: `the young pope`,
    season: 1,
    score: 74,
  }, {
    title: `a series of unfortunate events`,
    season: 1,
    score: 94,
  }, {
    title: `taboo`,
    season: 1,
    score: 78,
  }, {
    title: `colony`,
    season: 2,
    score: 100,
  }, {
    title: `24: legacy`,
    season: 1,
    score: 57,
  }, {
    title: `speechless`,
    season: 1,
    score: 98,
  }, {
    title: `scherlock`,
    season: 4,
    score: 65,
  }, {
    title: `stranger things`,
    season: 1,
    score: 95,
  }, {
    title: `this is us`,
    season: 1,
    score: 89,
  }, {
    title: `timeless`,
    season: 1,
    score: 84,
  }, {
    title: `the oa`,
    season: 1,
    score: 73,
  },
];

const wrapWithTag = (content, tagname) => `<${tagname}>${content}</${tagname}>`;

//created this constant in order to filter the shows by their scores/ declare a constant, give it a bame, say it = shows.filter function, say that function consists of looking at a show from the show variable, then looking at the shows score and seeing if it is > or = to 90
const topScoreFilter = shows.filter(show => show.score >= 90);

//double checking the constant i just made works -- it does
console.log(topScoreFilter);

//changed the line 75 'shows.foreach to refernce my new constant made above
document.write(`<ol>`);
topScoreFilter.forEach(show => document.write(wrapWithTag(show.title, `li`)));
document.write(`</ol>`);
