'use strict';

/* Remove Repeats

  A user can input some text and have all repeated characters removed.
    - given the user cancels:
        they are prompted again
    - given their input has at least one repeated character:
        the repeats are removed and a before/after is displayed
    - given their input has at no repeated characters:
        nothing is changed and the initial input is displayed

    test cases:
    contains no repeated characters:
      ' '           ->   ' '
      'abc'         ->   'abc'
      'market'      ->   'market'
      'toad'        ->   'toad'
    contains 1 repeated character:
      '  '          ->  '"  " -> " "'
      'aa'          ->  '"aa" -> "a"'
      'aba'         ->  '"aba" -> "ab"'
      'abac'        ->  '"abac" -> "abc"'
      'JavaScript'  ->  '"JavaScript" -> "JavScript"'
    contains more than 1 repeated characters:
      '   '         ->  '"   " -> " "'
      'abacada'     ->  '"abacada" -> "abcd"'
      'abcdefggg'   ->  '"abcdefggg" -> "abcdefg"'
      '.@@..@@.'    ->  '".@@..@@." -> ".@"'

*/

/* --- gather user input --- */

let userInput;
do {
  userInput = prompt('Please enter some text:');
} while (userInput === null);

/* --- remove repeated characters from the input --- */

let noRepeats = '';
for (let i = 0; i < userInput.length; i++) {
  if (noRepeats.indexOf(userInput[i]) === -1) {
    noRepeats += userInput[i];
  }
}

/* --- create a message for the user --- */

let message;
if (noRepeats === userInput) {
  message = 'No repeats found. Input unchanged: ' + userInput;
} else {
  message = 'Repeats removed: "' + userInput + '" -> "' + noRepeats + '"';
}

/* --- display the message to the user --- */

alert(message);