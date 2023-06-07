'use strict';

/*

  Data In:
    - User input (string)

  Data Out:
    - Alert message

  Test Cases: hello -> hello to you too!

*/

let input = '';

while (input !== 'hello') {
  input = prompt('say hello');
}

alert('hello to you too!');