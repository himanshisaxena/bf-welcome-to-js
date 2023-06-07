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


function beExcited() {
  let userInput = prompt("Enter some text:");

  if (userInput === null) {
    beExcited(); // user canceled, prompt again
  } else if (typeof userInput === 'string') {
    let excitedText = userInput + '!';
    alert(excitedText);
  } else {
    beExcited(); // invalid input, prompt again
  }
}

beExcited();