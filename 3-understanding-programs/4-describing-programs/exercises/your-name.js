// #todo

'use strict';

let userInput = '';
while (true) {
  userInput = prompt('Enter your name:');

  if (userInput === null || userInput === '') {
    alert('Nothing is not a name');
    continue;
  }

  const userDidConfirm = confirm('Is this your name: "' + userInput + '"');
  if (userDidConfirm) {
    break;
  }
}

alert('Your name is: "' + userInput + '"');
