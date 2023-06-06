'use strict';

// #todo

/* 
- if null or empty string => prompt the user again
- if text doesn't includes f or F => alert the text
- if text with f, it will replace f with frog => alert the new text
- if text with F, it will replace F with FROG => alert the new text
*/


/* -- gather user input -- */

let toBeFrogged = null;

while (!toBeFrogged) {
  toBeFrogged = prompt(
    'enter some text to frogify.\n' +
      '- "f" will be replaced with "frog"\n' +
      '- "F" will be replaced with "FROG"',
  );
}

/* -- generate a new string -- */

let frogged = '';

for (const character of toBeFrogged) {
  /* -- append to new string
    - can you think of a way to combine these two conditionals?
  -- */

  if (character === 'f') {
    frogged = frogged + 'frog';
    continue;
  }
  if (character === 'F') {
    frogged = frogged + 'FROG';
    continue;
  }
  frogged = frogged + character;
}

/* -- communicate the new string -- */

alert(frogged);