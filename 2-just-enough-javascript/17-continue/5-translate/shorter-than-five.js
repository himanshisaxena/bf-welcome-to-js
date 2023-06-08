'use strict';

/*


  Data In: hack

  Data Out: hack

  Test Cases: hack expected: hack

*/

/* ---   Prompt for input   --- */

let input = '';

while (true) {
  input = prompt('enter something shorter than 5 characters');
  /* ---   Validate input   --- */
  if (input === null) {
    alert('there is no escape');
    continue;
  }
  // If the input length is greater than 4
  if (input.length > 4) {
    alert('your input is too long');
    continue;
  }
  // Break out of the loop if input is valid
  break;
}

/* ---   Display result   --- */

alert(input);