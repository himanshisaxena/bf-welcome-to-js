'use strict';

/*


  Data In: user input

  Data Out: "Himanshi" has no spaces

  Test Cases: Himanshi -> "Himanshi" has no spaces
              I love life -> "I love life" has at least one space

*/

/* --- Get user input --- */

let input = null;

while (input === null) {
  input = prompt(
    'Enter some text. The program will check if it has any spaces',
  );
}

/* --- Check if input has no spaces --- */

let noSpaces = true;

for (let letter of input) {
  if (letter === ' ') {
    noSpaces = false;
    break;
  }
}

/* --- Create message based on the presence of spaces --- */

let message = '';

if (noSpaces) {
  message = '"' + input + '" has no spaces';
} else {
  message = '"' + input + '" has at least one space';
}

/* --- Display the message --- */

alert(message);