'use strict';

/*

  Data In:
    - User input (string)

  Data Out:
    - Alert message (string)

  Test Cases:
    - Case 1:
      Input: 'hello'
      Output: 'hello!'
    - Case 2:
      Input: 'how are you?'
      Output: 'how are you?!'

*/

let input = null;
while (input === null) {
  input = prompt('enter something, it will become excited');
}

let output = input;
if (input[input.length - 1] !== '!') {
  output += '!';
}

alert(output);