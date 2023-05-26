'use strict';

/* Remove Spaces
This program reverses the input only if it is 10 characters long.
  
  Data In:
  Any text

  Data Out:
  the input has remove space

  Test Cases:
  'abc test' -> 'abctest'
  'JavaScript' -> 'JavaScript'
  'HimanshiSaxena' -> 'HimanshiSaxena'


*/

/* --- gather user input --- */

let input = null;
while (input === null) {
  input = prompt('enter some text, all the spaces will be removed');
  console.log(input);
}

/* --- create new data with no spaces --- */

let spaceless = ' ';
for (let character of input) {
  if (character !== ' ') {
    spaceless = spaceless + character;
    console.log(spaceless);
  }
}

/* --- create a final message --- */

let message = 'before: ' + input + '\nafter: ' + spaceless;
console.log(message);

/* --- display message to the user --- */

alert(message);
