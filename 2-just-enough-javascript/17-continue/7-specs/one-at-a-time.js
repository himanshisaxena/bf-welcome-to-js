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
  // Prompt the user to enter a single character or confirm completion
  let input = prompt('Enter a single character to add to the output or confirm completion by clicking "Cancel" or entering an empty string');

  /* --- input validation and handling --- */

  // If the user cancels the prompt
  if (input === null) {
    alert('Operation canceled. Please continue entering characters or confirm completion.');
    continue; // Continue to the next iteration of the loop
  }

  // If the input is an empty string
  if (input === '') {
    alert('Empty input. Please enter a single character or confirm completion.');
    continue; // Continue to the next iteration of the loop
  }

  // If the input is longer than 1 character
  if (input.length > 1) {
    alert('Invalid input. Please enter a single character or confirm completion.');
    continue; // Continue to the next iteration of the loop
  }

  // If the input is a single character, append it to the output
  output += input;

  // Ask the user if they want to continue or confirm completion
  let confirm = prompt('Do you want to continue entering characters? Enter "Y" to continue or any other key to confirm completion.');

  // If the user confirms completion, break out of the loop
  if (confirm !== 'Y' && confirm !== 'y') {
    break;
  }
}

/* --- alert the result --- */

console.log('output:', output);
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