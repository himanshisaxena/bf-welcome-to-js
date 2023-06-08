'use strict';

/*
  a user can add single characters to a string until they confirm they have finished
    - given they cancel, they see a helpful message and are prompted again
    - given the input is empty, they see a helpful message and are prompted again
    - given the input is longer than 1 character, they see a helpful message and are prompted again
    - given the input is a single character, the input is appended to the output
    - given the user confirms the output is complete, the loop will end and the output is displayed

  no test cases!
    this program cannot be tested by input/output pairs
    because the user can decide when to stop there are no certain test cases

*/

console.log('--- begin program ---');

/* --- declare initial output --- */

let output = '';

/* --- create final output --- */

while (true) {
  const input = prompt('Enter a single character (or click "Cancel" to finish):');

  if (input === null) {
    alert('Process canceled. Please restart to continue.');
    continue;
  }

  if (input.length === 0) {
    alert('Input cannot be empty. Please try again.');
    continue;
  }

  if (input.length > 1) {
    alert('Input should be a single character. Please try again.');
    continue;
  }

  output += input;

  const confirm = prompt(`Current output: ${output}\nDo you want to add more characters? (Y/N)`);

  if (confirm !== null && confirm.toLowerCase() !== 'y') {
    break;
  }
}

/* --- alert the result --- */

console.log('output:', output);
alert('Final output: ' + output);

console.log('--- end program ---');

/*
  checklist:
    [x] the code is formatted
    [x] linting check passes
    [x] variable names are clear and helpful
    [x] each line of code is explained in a comment above that line
      - use full sentences and correct JS vocabulary
    [x] the program runs
    [x] the program has no errors
    [ ] all of the test cases work
    [ ] you tested strange inputs that could break your program (edge cases)
*/