'use strict'

console.log('--- begin program ---');

/* --- gather user input --- */

let input = '';
while (true) {
  const userInput = prompt('Please enter a non-empty string (or cancel to exit):');

  if (userInput === null) {
    alert('Operation canceled.');
    continue;
  }

  if (userInput === '') {
    alert('Invalid input. Please enter a non-empty string.');
    continue;
  }

  input = userInput;
  break;
}
console.log('input:', input);

/* --- declare initial output --- */

let output = '';

/* --- create final output --- */

for (let i = 0; i < input.length; i++) {
  const char = input[i];
  if (isLetter(char)) {
    output += char;
  }
}
output += '|' + reverseString(output);

/* --- alert the result --- */

console.log('output:', output);
alert(output);

console.log('--- end program ---');

/* --- helper function to check if a character is a letter --- */

function isLetter(char) {
  return (char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z');
}

/* --- helper function to reverse a string --- */

function reverseString(str) {
  let reversed = '';
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}