'use strict';

/* Challenge: write this program using `break` and `continue`

  a user can input string of letters to be converted into a bouncy string
    (a bouncy string is one with every other letter uppercase)
    - given the user cancels, they will be prompted again
    - given the input is empty, they will be prompted again
    - given their input contains anything that is not a letter, they will be prompted again
    - given their input is valid, the loop will exit and their bouncy string will be displayed


  test cases:
    uppercase strings:
      'ABCDEF' -> 'aBcDeF'
      'JELLO' -> 'jElLo'
    lowercase strings:
      'abcdef' -> 'aBcDeF'
      'jello' -> 'jElLo'
    mixed strings:
      'AbCdEf' -> 'aBcDeF'
      'jElLo' -> jElLo'
*/

console.log('--- begin program ---');

/* --- gather user input --- */

let input;
while (true) {
  input = prompt('Please enter a string of letters:');

  if (input === null) {
    continue; // User canceled, prompt again
  }

  if (input === '') {
    continue; // Empty input, prompt again
  }

  let isValid = true;
  for (let i = 0; i < input.length; i++) {
    const charCode = input.charCodeAt(i);
    if (
      (charCode < 65 || charCode > 90) && // not uppercase A-Z
      (charCode < 97 || charCode > 122) // not lowercase a-z
    ) {
      isValid = false;
      break;
    }
  }

  if (!isValid) {
    continue; // Input contains non-letter characters, prompt again
  }

  break; // Valid input, exit the loop
}

console.log('input:', input);

/* --- declare initial output --- */

let output = '';

/* --- create final output --- */

for (let i = 0; i < input.length; i++) {
  if (i % 2 === 0) {
    output += input[i].toLowerCase();
  } else {
    output += input[i].toUpperCase();
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