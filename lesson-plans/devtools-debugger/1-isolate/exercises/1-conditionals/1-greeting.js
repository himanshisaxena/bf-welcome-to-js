'use strict';

let input = prompt('enter your name:');

let greeting = '';
if (input === null) {
  greeting = 'Hello anonymous.';
} else {
  greeting = 'Hello ' + input + '!';
}

alert(greeting);

/*  ===== Challenges =====
  - Ask the user for their first and last names.
  - Greet them with their full name.
*/

let firstName = prompt('Enter your first name:');
let lastName = prompt('Enter your last name:');

let greet = '';

if (
  firstName === null ||
  firstName === '' ||
  lastName === null ||
  lastName === ''
) {
  greet = 'Hello anonymous.';
} else {
  let fullName = firstName + ' ' + lastName;
  greet = 'Hello ' + fullName + '!';
}

alert(greet);