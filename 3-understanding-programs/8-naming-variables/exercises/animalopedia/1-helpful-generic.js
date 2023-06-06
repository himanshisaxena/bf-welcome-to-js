// #todo

'use strict';

/* generic

  _a -> input;
  _b -> inputFact;
  _c -> checkInputFact

*/

alert(
  'this is a two-player game:\n\n' +
    '- player 1: enters an animal\n' +
    '- player 2: says something cool about it',
);

let animal = null;
while (animal === null) {
  animal = prompt('enter an animal');
}

let inputFact = '';

let checkInputFact = false;
while (!checkInputFact) {
  inputFact = prompt('tell me something about ' + animal);

  if (inputFact === '' || inputFact === null) {
    alert('that is not something');
  } else if (inputFact.toLowerCase().includes(animal.toLowerCase())) {
    checkInputFact = true;
  } else {
    alert('nope, not about ' + animal + '.  try again.');
  }
}

alert('i just learned something cool about ' + animal + '!\n\n- "' + inputFact + '"');