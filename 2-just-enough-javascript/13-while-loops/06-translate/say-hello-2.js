'use strict';

/*

  Data In:
    - User input (string)

  Data Out:
    - Alert message

  Test Cases: hello -> hello to you too!

*/

let input = null;

while (input === null) {
  input = prompt('say hello');
}

let message = '';

if (input === 'hello') {
  message = 'hello to you too!';
} else {
  message = 'good bye';
}

alert(message);