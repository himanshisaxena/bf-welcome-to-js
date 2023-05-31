'use strict';

/*
  test cases:
    null -> (do not exit the loop)
    '' -> (do not exit the loop)
    ' ' -> 'You entered " "'
    'Hi' -> 'You entered "Hi"'
    'Himanshi' -> 'you entered "Himanshi"'

  experiment 1
    line:
    why:
    trying:

*/

let message = '';

let input = null;
while (!input) {
  input = prompt('Enter something');

  message = 'You entered "' + input + '"';
}

alert(message);