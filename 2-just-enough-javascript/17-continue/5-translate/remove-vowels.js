// #todo

'use strict';

/*

  Data In: Hack your future

  Data Out: Hack your future -> Hck yr ftr

  Test Cases: Hack your future expected: Hack your future -> Hck yr ftr

*/

/* ---   ?   --- */

let letters = null;

while (letters === null) {
  letters = prompt('enter some letters');
}

/* ---   ?   --- */

let noVowels = '';

for (let character of letters) {
  if ('aeiouAEIOU'.includes(character)) {
    continue;
  } else {
    noVowels = noVowels + character;
  }
}

/* ---   ?   --- */

alert(letters + ' -> ' + noVowels);