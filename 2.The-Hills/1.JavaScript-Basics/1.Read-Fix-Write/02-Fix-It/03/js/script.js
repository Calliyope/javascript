const tvshows = [
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

// to display the array backwards I added reverse to the write function
tvshows.reverse();

//this script wasnt displayng properly because the reference 'movies' was not defined. The fucntion was calling for movies to be written by it was actually tvshows as declared in the constant above.
document.write(`<ol>`);
for (let i = 0; i < tvshows.length; i++) {
  document.write(`<li>${tvshows[i]}</li>`);
}
document.write(`</ol>`);


