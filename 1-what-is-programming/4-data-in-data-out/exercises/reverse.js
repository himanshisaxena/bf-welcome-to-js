'use strict';

/* Reverse
This program reverse the input.

Data In:
Any text

  Data Out:
  The reverse input 
  
  Test Cases:
  '' -> ''
  'abc' -> 'cba'
  'HimanshiSaxena' -> 'anexaSihsnamiH'


*/

/* --- gather user input --- */

let input = null;
while (input === null) {
  input = prompt('enter some text to reverse');
  console.log(input);
}

/* --- reverse the input text --- */

let reversed = '';
for (let character of input) {
  reversed = character + reversed;
  console.log(reversed);
}

/* --- create a final message --- */

let message = reversed + ' -> ' + input;
console.log(message);

/* --- display message to the user --- */

alert(message);
