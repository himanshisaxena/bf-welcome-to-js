'use strict';

/* Bouncy String

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
      'jElLo' -> 'jElLo'
*/

/* Bouncy String */

/* --- gather user input --- */
let input = '';

while (true) {
  input = prompt('Enter a string of letters');

  if (input === null) {
    alert('No canceling!');
  } else if (input.trim() === '') {
    alert('Empty input is not allowed');
  } else if (!isLetterString(input)) {
    alert('Invalid input! Only letters are allowed');
  } else {
    break;
  }
}

/* --- create the bouncy string --- */
let bouncyString = '';

for (let i = 0; i < input.length; i++) {
  if (i % 2 === 0) {
    bouncyString += input[i].toLowerCase();
  } else {
    bouncyString += input[i].toUpperCase();
  }
}

/* --- display the bouncy string --- */
alert('Bouncy String: ' + bouncyString);

/* --- helper function to check if a string contains only letters --- */
function isLetterString(str) {
  for (let char of str) {
    if (!isLetter(char)) {
      return false;
    }
  }
  return true;
}

/* --- helper function to check if a character is a letter --- */
function isLetter(char) {
  return (
    (char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z')
  );
}