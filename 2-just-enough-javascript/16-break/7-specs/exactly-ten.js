'use strict';

/* Challenge: write this program using at least 1 `break`

  a user can provide input that is 10 characters long
    - given they cancel, a message is displayed and they are prompted again
    - given the input is too short, they are told how much too short and prompted again
    - given the input is too long, they are told how much too long and prompted again
    - given the input is 10 characters, the loop will exit and the input is alerted

  test cases:
    invalid input:
      (no test cases! the loop will not exit so there will be no output to test)
    input of 10 characters
      'javascript' -> 'javascript'
      '0123456789' -> '0123456789'
      'a b c d e ' -> 'a b c d e '

*/

console.log('--- begin program ---');

/* --- declare initial output --- */

let output = '';

/* --- create final output --- */

while (true) {
  let input = prompt('Enter input that is 10 characters long');

  if (input === null) {
    alert('Input canceled. Please try again.');
    continue; // User canceled, prompt again
  }

  if (input.length < 10) {
    let remainingChars = 10 - input.length;
    alert(`Input is too short. Please add ${remainingChars} more character(s).`);
    continue; // Input is too short, prompt again
  }

  if (input.length > 10) {
    let extraChars = input.length - 10;
    alert(`Input is too long. Please remove ${extraChars} character(s).`);
    continue; // Input is too long, prompt again
  }

  output = input;
  break; // Valid input, exit the loop
}

/* --- alert the result --- */

console.log('output:', output);
alert(output);

console.log('--- end program ---');