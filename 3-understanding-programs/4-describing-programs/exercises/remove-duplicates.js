// #todo

'use strict';

let phrase = null;
while (phrase === null) {
  phrase = prompt(
    'Enter something with duplicated letters, they will be removed',
  );
}

let previous = '';

let noRepetitions = '';
for (const next of phrase) {
  if (next !== previous) {
    noRepetitions = noRepetitions + next;
  }
  previous = next;
}

alert(noRepetitions);
