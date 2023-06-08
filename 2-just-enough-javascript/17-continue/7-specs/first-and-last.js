'use strict';

/* Challenge: write this program using `break` and `continue`

  a user can provide input that starts with a capital letter and ends with a period
    - given the user cancels, they will be prompted again
    - given the input is shorter than two characters, they will be prompted again
    - given their input does not begin with a capital letter, they will be prompted again
    - given their input does not end with a period, they will be prompted again
    - given their input is valid, the first letter will be lower-cased and the period removed
    - given their input is valid, the loop will exit

  test cases:
    invalid input:
      (no test cases! the loop will not exit so there will be no output to test)
    two-character input:
      'A.' -> 'a'
      'X.' -> 'x'
    longer words:
      'Hello.' -> 'hello'
      'JavaScript!.' -> 'javaScript!'
    with some spaces:
      'Hello World.' -> 'hello World'
      'Hack your future.' -> 'hack your future'

*/

console.log('--- begin program ---');

/* --- declare initial output --- */

let output;

/* --- create final output --- */

while (true) {
  let input = prompt('Please enter a string that starts with a capital letter and ends with a period:');

  if (input === null) {
    alert('You canceled. Please try again.');
    continue; // User canceled, prompt again
  }

  if (input.length < 2) {
    alert('Input is too short. Please enter a longer string.');
    continue; // Input is too short, prompt again
  }

  if (input[0] !== input[0].toUpperCase()) {
    alert('Input does not start with a capital letter. Please try again.');
    continue; // Input does not start with a capital letter, prompt again
  }

  if (input[input.length - 1] !== '.') {
    alert('Input does not end with a period. Please try again.');
    continue; // Input does not end with a period, prompt again
  }

  output = input[0].toLowerCase() + input.slice(1, input.length - 1);
  break; // Valid input, exit the loop
}

console.log('output:', output);

/* --- alert the result --- */

alert(output);

console.log('--- end program ---');

/*
  checklist:
    [ ] the code is formatted
    [ ] linting check passes
    [ ] variable names are clear and helpful
    [ ] each line of code is explained in a comment above that line
      - use full sentences and correct JS vocabulary
    [ ] the program runs
    [ ] the program has no errors
    [ ] all of the test cases work
    [ ] you tested strange inputs that could break your program (edge cases)
*/