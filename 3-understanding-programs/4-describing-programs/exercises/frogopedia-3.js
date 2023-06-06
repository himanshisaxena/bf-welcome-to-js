// #todo

'use strict';

const animalName = 'frog';

let coolThing = '';

while (true) {
  coolThing = prompt('Tell me something about ' + animalName + 's');

  if (coolThing === '' || coolThing === null) {
    alert('That is not something');
    continue;
  }

  if (coolThing.toLowerCase().includes(animalName)) {
    break;
  }

  alert('Nope, not about frogs.  try again.');
}

alert('I just learned something cool about frogs!\n\n- "' + coolThing + '"');
