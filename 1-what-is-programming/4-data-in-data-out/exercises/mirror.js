'use strict';

/* Mirror
This program mirror the input.
  Data In:
Any text

  Data Out:
The mirror input 
  Test Cases:
  '' -> ''
  'abc' -> 'cba'
  'HimanshiSaxena' -> 'anexaSihsnamiH'

*/

/* --- gather user input --- */

let input = null;
while (input === null) {
  input = prompt('enter some text to mirror');
  console.log(input);
}

/* --- create mirrored text --- */

let mirrored = ' | ';
for (let character of input) {
  mirrored = character + mirrored + character;
  console.log(mirrored);
}

/* --- display mirrored text to the user --- */

alert(mirrored);
