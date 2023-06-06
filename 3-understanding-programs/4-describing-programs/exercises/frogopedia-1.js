// #todo

'use strict';

const animalName = 'frog';

let userInput = '';

let isFroggy = false;
while (isFroggy === false) {
  userInput = prompt('Tell me something about frogs');

  if (userInput === '' || userInput === null) {
    alert('That is not something');
  } else if (userInput.toLowerCase().includes(animalName)) {
    isFroggy = true;
  } else {
    alert('Nope, not about frogs.  try again.');
  }
}

alert('I just learned something cool about frogs!\n\n- "' + userInput + '"');
