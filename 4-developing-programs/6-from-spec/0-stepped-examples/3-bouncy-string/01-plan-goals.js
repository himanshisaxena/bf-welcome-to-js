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

/* --- gather input from the user --- */
//  Data In:      null or a string
//  Data After:   a non-empty string with only letters

/* --- repeat if the input is null (sub-goal!) --- */
/* --- repeat if the input is empty (sub-goal!) --- */
/* --- repeat if the input is only letters (sub-goal!) --- */
/* --- exit if the input passed the previous checks (sub-goal!) --- */

/* --- bouncify the string --- */
//  Data Before:  a string with only letters, upper or lower case
//  Data After:   the same letters with every other uppercase

/* --- display the bouncy string --- */
// Data Out:      a bouncy string


/* Bouncy String */

/* --- gather input from the user --- */
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

/* --- bouncify the string --- */
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
  let charCode = char.charCodeAt(0);
  return (
    (charCode >= 65 && charCode <= 90) || // uppercase letters
    (charCode >= 97 && charCode <= 122) // lowercase letters
  );
}