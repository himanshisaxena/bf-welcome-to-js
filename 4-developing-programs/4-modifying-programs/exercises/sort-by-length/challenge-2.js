'use strict';

/*
  modify the program so that:
    a short string is 3 characters long OR fewer
    a long string is LONGER than 6 characters
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

  while (input.length > 3 && input.length <= 6) {
    input = prompt('String is medium length. Enter something shorter or longer');
    if (input === null) {
      break;
    }
  }

  if (input === null) {
    break;
  }

  if (input.length <= 3) {
    shortStrings = shortStrings + '\n- "' + input + '"';
  } else {
    longStrings = longStrings + '\n- "' + input + '"';
  }
}

alert(shortStrings + '\n\n' + mediumStrings + '\n\n' + longStrings);