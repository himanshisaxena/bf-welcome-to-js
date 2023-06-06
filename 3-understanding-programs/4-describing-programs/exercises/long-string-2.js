// #todo

'use strict';

let anything = '';

while (true) {
  anything = prompt('Enter anything longer than 5 characters');

  if (anything === null) {
    alert('There is no escape');
    continue;
  }

  if (anything.length <= 6) {
    alert('Too short');
    continue;
  }

  break;
}

alert('"' + anything + '" is ' + anything.length + ' characters long');
