'use strict';

/*


  Data In: I love coding.

  Data Out: I love coding. -> Ilovecoding.

  Test Cases: I love coding. expected: I love coding. -> Ilovecoding.

*/

/* ---   ?   --- */

// input <- null

// hasSpaces <- false

// WHILE: !hasSpaces
//   input <- prompt('enter something with at least one space, the spaces will be removed')
//   IF: input === null
//     alert('no escape')
//   ELSE: IF: input === ''
//     alert('gotta enter something')
//   ELSE: IF: !input.includes(' ')
//     alert('there must be a space!')
//   ELSE:
//     hasSpaces <- true
//   :END IF
// :END WHILE

/* ---   ?   --- */

// spaceless <- ''

// FOR: character OF input
//   IF: character === ' '
//     CONTINUE
//   :END IF
//   spaceless <- spaceless + character
// :END FOR-OF

/* ---   ?   --- */

// alert(input + ' -> ' + spaceless)


'use strict';

let input = null;
let hasSpaces = false;

// Prompt the user until a string with at least one space is entered
while (!hasSpaces) {
  input = prompt('Enter something with at least one space. Spaces will be removed.');

  if (input === null) {
    alert('No escape!');
  } else if (input === '') {
    alert('You must enter something!');
  } else if (!input.includes(' ')) {
    alert('There must be at least one space!');
  } else {
    hasSpaces = true;
  }
}

let spaceless = '';

// Remove spaces from the input string
for (const character of input) {
  if (character === ' ') {
    continue;
  }
  spaceless += character;
}

// Display the original input and the spaceless version
alert(input + ' -> ' + spaceless);