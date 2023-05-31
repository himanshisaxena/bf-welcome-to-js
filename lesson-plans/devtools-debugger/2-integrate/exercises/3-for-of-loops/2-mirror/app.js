import {
  whenFormDataChanges,
  readString,
  displayString,
} from '../../../../../../lib/dom-io/index.js';

whenFormDataChanges('input', () => {
  debugger;

  console.log('--- form data changed ---');

  // --- read the user's input ---

  let userText = readString('to-mirror');
  let middleCharacter = readString('middle-character');

  // --- mirror the text ---

  let mirrored = '';
  let nonMirrored = '';
  for (let char of userText) {
    mirrored = char + mirrored + char;
    nonMirrored += char;
  }

  // --- apply case transformation ---

  mirrored = mirrored.toUpperCase();
  nonMirrored = nonMirrored.toLowerCase();

  // --- insert middle character ---

  let mirroredWithMiddle = mirrored.split(' ').join(' ' + middleCharacter + ' ');

  // --- display the result ---

  displayString('output', mirroredWithMiddle + ' ' + nonMirrored);
});


/*  ===== Challenges =====

  - make the mirror image upper case
  - make the non-mirror image lower case
  - let the user decide which character goes in the middle
      for example, any of these should be possible:
        asdf * fdsa
        asdf & fdsa
        asdf - fdsa
        asdf o fdsa
        ...
      you will need to add an input to the HTML file

*/