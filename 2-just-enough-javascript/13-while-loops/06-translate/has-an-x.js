'use strict';

/*

  Data In:
    - User input (string)

  Data Out:
    - Alert message indicating if the input has an "x" (string)

  Test Cases: Himanshi --> does not have a single "x"

*/

let input = null;

while (input === null) {
  input = prompt('enter something, the program will check if it has an "x"');
}

let message = '';

if (input.includes('x')) {
  message = message + 'has at least one "x"';
} else {
  message = message + 'does not have a single "x"';
}

alert(message);