'use strict';

/*
  modify the program so the sorted strings are alerted from long to short
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

  if (input.length < 5) {
    shortStrings = shortStrings + '\n- "' + input + '"';
  } else if (input.length < 10) {
    mediumStrings = mediumStrings + '\n- "' + input + '"';
  } else {
    longStrings = longStrings + '\n- "' + input + '"';
  }
}

// Reverse the order of the strings
let sortedStrings = longStrings + '\n\n' + mediumStrings + '\n\n' + shortStrings;

alert(sortedStrings);