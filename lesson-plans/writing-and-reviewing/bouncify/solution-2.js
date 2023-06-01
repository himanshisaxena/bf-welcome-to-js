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

var message = '';

while (true) {
  // in case null
  const userInput = prompt('Please enter something : ');
  if (userInput === null) {
    alert('There is no escape!');
    continue;
  }
  // in case empty string
  if (userInput === '') {
    alert('No empty string allowed');
    continue;
  }
  // if userInput exist
  if (userInput) {
    message = userInput;
    break;
  }
}
// Declare a variable counter and initilize it to the value 'true'
var isUpperCase = true;
// Declare a variable newname and initilize it to the value '""'
var newMessage = '';
let spcial = ' 0123456789!?.&*$#';
// Executes for loop statements

for (const char of message) {
  if (spcial.indexOf(char) === -1) {
    if (isUpperCase) {
      newMessage += char.toUpperCase();
      isUpperCase = false;
    } else {
      newMessage += char.toLowerCase();
      isUpperCase = true;
    }
  } else {
    newMessage += char;
  }
}

alert(newMessage);
