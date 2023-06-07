'use strict';

/* No Repeats

  A user can input some text and learn if it has any repeated characters.
    - given the user cancels:
        they are prompted again
    - given their input has at least one repeated character:
        they are told so
    - given their input has at no repeated characters:
        they are told so

  test cases:
    contains no repeated characters:
      ' '           ->   '" " has no repeats'
      'abc'         ->   '"abc" has no repeats'
      'market'      ->   '"market" has no repeats'
      'toad'        ->   '"toad" has no repeats'
    contains 1 repeated character:
      '  '          ->  '"  " has at least one repeat'
      'aa'          ->  '"aa" has at least one repeat'
      'aba'         ->  '"aba" has at least one repeat'
      'abac'        ->  '"abac" has at least one repeat'
      'JavaScript'  ->  '"JavaScript" has at least one repeat'
    contains more than 1 repeated characters:
      '   '         ->  '"   " has at least one repeat'
      'abacada'     ->  '"abacada" has at least one repeat'
      'abcdefggg'   ->  '"abcdefggg" has at least one repeat'
      '.@@..@@.'    ->  '".@@..@@." has at least one repeat'

*/

/* --- gather user input --- */

/* --- check if the input has any repeated characters --- */

//  store the search results as a boolean

/* --- create a message for the user --- */

/* --- display the message to the user --- */


/* No Repeats

  A user can input some text and learn if it has any repeated characters.
    - given the user cancels:
        they are prompted again
    - given their input has at least one repeated character:
        they are told so
    - given their input has at no repeated characters:
        they are told so

  test cases:
    contains no repeated characters:
      ' '           ->   '" " has no repeats'
      'abc'         ->   '"abc" has no repeats'
      'market'      ->   '"market" has no repeats'
      'toad'        ->   '"toad" has no repeats'
    contains 1 repeated character:
      '  '          ->  '"  " has at least one repeat'
      'aa'          ->  '"aa" has at least one repeat'
      'aba'         ->  '"aba" has at least one repeat'
      'abac'        ->  '"abac" has at least one repeat'
      'JavaScript'  ->  '"JavaScript" has at least one repeat'
    contains more than 1 repeated characters:
      '   '         ->  '"   " has at least one repeat'
      'abacada'     ->  '"abacada" has at least one repeat'
      'abcdefggg'   ->  '"abcdefggg" has at least one repeat'
      '.@@..@@.'    ->  '".@@..@@." has at least one repeat'

*/

/* --- gather user input --- */

let userInput;
do {
  userInput = prompt('Please enter some text:');
} while (userInput === null);

/* --- check if the input has any repeated characters --- */

let hasRepeats = false;
for (let i = 0; i < userInput.length; i++) {
  for (let j = i + 1; j < userInput.length; j++) {
    if (userInput[i] === userInput[j]) {
      hasRepeats = true;
      break;
    }
  }
  if (hasRepeats) {
    break;
  }
}

/* --- create a message for the user --- */

let message;
if (hasRepeats) {
  message = '"' + userInput + '" has at least one repeat';
} else {
  message = '"' + userInput + '" has no repeats';
}

/* --- display the message to the user --- */

alert(message);