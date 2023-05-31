'use strict';

/*
  test cases:
    null -> ':('
    'Hi' -> 'too short'
    'Himan' -> 'perfect'
    'Himanshi' -> 'too long'

  experiment 1
    line:
    why:
    trying:

*/

let input = prompt('enter something 5 characters long');

if (!input) {
  alert(':(');
} else if (input.length < 5 ) {
  alert('too short');
} else if (input.length > 5) {
  alert('too long');
} else {
  alert('perfect');
}