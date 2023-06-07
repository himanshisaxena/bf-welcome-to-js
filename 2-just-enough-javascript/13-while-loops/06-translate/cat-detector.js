'use strict';

/*

  Data In:
    - User input (string)

  Data Out:
    - Alert message (string)

  Test Cases:
    - Case 1:
      Input: 'cat'
      Output: 'thank you for the cat'
    - Case 2:
      Input: 'dog'
      Output: '"dog" is not a cat'

*/

let input = null;

while (input === null) {
  input = prompt('please enter "cat"');
}

let message = '';

if (input !== 'cat') {
  message = '"' + input + '" is not a cat';
} else {
  message = 'thank you for the cat';
}

alert(message);