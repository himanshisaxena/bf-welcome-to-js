'use strict';

/* Bouncify

  A user can enter some text to bouncify it.
    - given a non-empty string
      every other letter is converted to UPPER CASE
      every other letter is converted to lower case
      all other characters are ignored without changing the pattern

  test cases:
    has only letters:
      'a'           -> 'A'
      'Hello'       -> 'HeLlO'
      'HELLO'       -> 'HeLlO'
      'cheese'      -> 'ChEeSe'
    has spaces and letters:
      'good bye'      -> 'GoOd ByE'
      ' row a boat '  -> ' RoW a BoAt '
    has everything:
      '12 Good Byes!'     -> '12 GoOd ByEs!'
      'h1! Hoe gaat het?' -> 'H1! hOe GaAt HeT?'
      '0 . x . 0'         -> '0 . X . 0'

*/

// A variable to store the userInput
let txt = '';
while (true) {
  // In case null
  const userInput = prompt('Please enter something : ');
  if (userInput === null) {
    alert('There is no escape!');
    continue;
  }
  // In case empty string
  if (userInput === '') {
    alert('No empty string allowed');
    continue;
  }
  // If userInput
  if (userInput) {
    txt = userInput;
    break;
  }
}

var alternateCase = function (s) {
  // Entire string lowercase
  var chars = s.toLowerCase().split("");
  // Iterates through the string with a step of 2 to make every other character uppercase.
  for (var i = 0; i < chars.length; i += 2) {
    chars[i] = chars[i].toUpperCase();
  }
  
  return chars.join("");
};

alert(alternateCase(txt));


