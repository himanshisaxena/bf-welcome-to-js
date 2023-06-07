'use strict';

/* Be Excited

  a user can input any text and it will become excited.
    - given the user cancels: they are prompted again
    - given the input is a string: it will have an "!" added to the end

  test cases:
    ''      -> '!'
    '!'     -> '!!'
    'JS'    -> 'JS!'
    'hello' -> 'hello!'
*/

/* --- get a string from the user --- */
//  Data In:      a string or null
//  Data After:   the first string the user inputs

/* --- make the string excited --- */
//  Data Before:  the user's string
//  Data After:   the same text with an exclamation mark

/* --- display the string to the user --- */
//  Data Out:  an excited string

function getInputString() {
  let userInput = prompt('Enter some text:');
  return userInput;
}

function makeExcited(text) {
  return text + '!';
}

function displayOutput(text) {
  alert(text);
}

function beExcited() {
  let inputString = getInputString();

  if (inputString === null) {
    beExcited(); // user canceled, prompt again
  } else {
    let excitedString = makeExcited(inputString);
    displayOutput(excitedString);
  }
}

beExcited();