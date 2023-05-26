'use strict';

/* Flip Five
This program reverses the input only if it is 10 characters long.
  Data In:
  Any text

  Data Out:
  the reversed input if it was 10 characters long
  the unchanged input if it was not 10 characters long

  Test Cases:
  '' -> ''
  'abc' -> 'abc'
  'JavaScript' -> 'tpircSavaJ'
  'HimanshiSaxena' -> 'HimanshiSaxena'

*/

/* --- gather user input --- */

let input = null;
while (true) {
  input = prompt('enter something with 10 characters and it will be reversed.');
  console.log(input);

  /* --- check that the user input is 10 characters long --- */

  if (input !== null && input.length === 10) {
    break;
  } else {
    alert('nope, try again.');
  }
}

/* --- create the final message --- */

let message = '';
for (let character of input) {
  message = character + message;
}
console.log(message);

/* --- display the message --- */

alert(message);
