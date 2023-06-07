'use strict';

/*
  modify the program so it searches for "A" or "a"

  you will need to change one condition
  the user's instructions
  and strings used to generate a reaction

  looking for a challenge?
    tell the user whether their input has "a" or "A"
*/

const userInput = prompt('Please enter something with an "A" or "a" in it');

let reaction;
if (userInput === null || userInput === '') {
  reaction = 'Nothing! Why???';
} else if (userInput.toLowerCase().includes('a')) {
  reaction = '"' + userInput + '" contains "a"';
} else {
  reaction = '"' + userInput + '" does not contain "a"';
}

alert(reaction);