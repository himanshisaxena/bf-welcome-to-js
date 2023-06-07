'use strict';

/*

  Data In:
    - User input (string)

  Data Out:
    - Alert message with the input (string)

  Test Cases: animal -> animal

*/

let input = '';
let prompting = true;

while (prompting) {
  input = prompt('enter something longer than 4 characters, or "cancel" to leave');

  if (input === null) {
    prompting = false;
    input = 'you canceled';
  } else if (input.length > 4) {
    prompting = false;
  }
}

alert(input);