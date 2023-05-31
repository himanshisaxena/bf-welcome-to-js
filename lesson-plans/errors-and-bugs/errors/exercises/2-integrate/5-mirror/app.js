import {
  whenFormDataChanges,
  readString,
  displayString,
} from '../../../../../../../lib/dom-io/index.js';

/*
  environment:

  name:SyntaxError
  message:  Invalid left-hand side expression in prefix operation

  location: 23

  life cycle: creation

  the mistake: trying to log unvalid string

  the fix(es): make the value string 
*/

whenFormDataChanges('input', () => {
  console.log('--- form data changed ---');

  // --- read the user's input ---

  let userText = readString('to-mirror');

  // --- mirror the text ---

  let mirrored = ' | ';
  for (let char of userText) {
    mirrored = char + mirrored + char;
  }

  // --- display the result ---

  displayString('output', mirrored);
});