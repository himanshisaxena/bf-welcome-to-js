'use strict';

/*

  Data In:
    - User input (string)

  Data Out:
    - Alert message with the input (string)

  Test Cases: Himanshi -> Himanshi

*/

let input = '';

while (input !== null && input.length <= 4) {
  input = prompt('enter something longer than 4 characters');
}

alert(input);