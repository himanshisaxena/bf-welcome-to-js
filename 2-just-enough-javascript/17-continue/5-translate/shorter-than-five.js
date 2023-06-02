// #todo

'use strict';

/*


  Data In: hack

  Data Out: hack

  Test Cases: hack expected: hack

*/

/* ---   ?   --- */

let input = '';

while (true) {
  input = prompt('enter something shorter than 5 characters');
  /* ---   ?   --- */
  if (input === null) {
    alert('there is no escape');
    continue;
  }
  /* ---   ?   --- */
  if (input.length > 4) {
    alert('your input is too long');
    continue;
  }
  /* ---   ?   --- */
  break;
}

/* ---   ?   --- */

alert(input);