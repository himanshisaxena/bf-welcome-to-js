// these are the only functions you will need
import {
  whenFormDataChanges,
  readNumber,
  displayString,
} from '../../../../../lib/dom-io/index.js';

whenFormDataChanges('numbers', () => {

  // debugger;

  console.log('\n--- form data changed ---');

  // --- read user input ---

  let leftNumber = readNumber('left-num');
  let rightNumber = readNumber('right-num');

 // --- do the math ---

  let sum = leftNumber + rightNumber;
  let mines = leftNumber - rightNumber;
  let multi = leftNumber * rightNumber;
  let division = leftNumber / rightNumber;
  let modul = leftNumber % rightNumber;

   // --- create a message

  let message = '';
  message += `__ + __ === ${sum}\n`;
  message += `__ - __ === ${mines}\n`;
  message += `__ * __ === ${multi}\n`;
  message += `__ / __ === ${division}\n`;
  message += `__ % __ === ${modul}`;

  displayString('sum', message);
});