// #todo

'use strict';

let userInput = '';

let isTooShort = true;
while (isTooShort) {
  userInput = prompt('Enter anything longer than 6 characters');

  if (userInput === null) {
    alert('There is no escape');
    continue;
  }

  isTooShort = userInput.length <= 6;
  if (isTooShort) {
    alert('Too short');
  }
}

alert('"' + userInput + '" is ' + userInput.length + ' characters long');
