// #todo

'use strict';

let phrase = null;
while (phrase === null) {
  phrase = prompt('Enter a phrase');
}

const keepLetters = confirm(
  '"Ok" to remove everything that is not a letter\n' +
    '"Cancel" to repeat each character',
);

let newPhrase = '';
if (keepLetters) {
  const letters = 'abcdefghijklmnopqrstuvwxyz';
  for (const character of phrase) {
    if (letters.includes(character.toLowerCase())) {
      newPhrase = newPhrase + character;
    }
  }
} else {
  for (const character of phrase) {
    newPhrase = newPhrase + character + character;
  }
}

alert(newPhrase);
