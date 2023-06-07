'use strict';

/*
  log the user's input
  log the every character that is removed
    hint: you may need to write an `else`
  log the final result
*/

let phrase = null;
while (phrase === null) {
  phrase = prompt('enter a phrase');
  console.log(phrase);
}

const keepLetters = confirm(
  '"ok" to remove everything that is not a letter\n' +
    '"cancel" to repeat each character',
);

let newPhrase = '';
if (keepLetters) {
  const letters = 'abcdefghijklmnopqrstuvwxyz';
  for (const char of phrase) {
    if (letters.includes(char.toLowerCase())) {
      newPhrase = newPhrase + char;
    } else {
      console.log(char);
      }
  }
} else {
  for (const char of phrase) {
    newPhrase = newPhrase + char + char;
  } 
}

alert(newPhrase);
console.log(newPhrase);