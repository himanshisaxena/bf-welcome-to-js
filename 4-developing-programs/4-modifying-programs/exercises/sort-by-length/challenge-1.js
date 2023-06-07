'use strict';

/*
  modify the program so that short strings are not accepted
  if the user inputs a short string, they are prompted again
*/

alert(
  'Enter many strings, they will be sorted by length.\n\n' +
    'When you are done entering strings, you can click "Cancel" or "Escape".',
);

let shortStrings = 'Short:';
let mediumStrings = 'Medium:';
let longStrings = 'Long:';

while (true) {
  let input = prompt('Enter something');

  if (input === null) {
    break;
  }

  while (input.length < 5) {
    input = prompt('String is too short. Enter something longer');
    if (input === null) {
      break;
    }
  }

  if (input === null) {
    break;
  }

  if (input.length < 10) {
    mediumStrings = mediumStrings + '\n- "' + input + '"';
  } else {
    longStrings = longStrings + '\n- "' + input + '"';
  }
}

alert(shortStrings + '\n\n' + mediumStrings + '\n\n' + longStrings);