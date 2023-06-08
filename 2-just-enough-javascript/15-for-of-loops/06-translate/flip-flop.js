'use strict';

/*


  Data In: user input

  Data Out: oSemhtnig

  Test Cases: Something -> oSemhtnig
              I love coding ->  Iolevc donig

*/

/* --- Get user input --- */

let normalPhrase = null;

while (normalPhrase === null) {
  normalPhrase = prompt('Enter something to flip-flop');
}

/* --- Flip-flop the string --- */

let previous = '';
let flipFlopped = '';

for (let i = 0; i < normalPhrase.length; i++) {
  let current = normalPhrase[i];

  if (previous !== '') {
    flipFlopped += current + previous;
    previous = '';
  } else {
    previous = current;
  }
}

/* --- Handle the last character if needed --- */

if (flipFlopped.length < normalPhrase.length) {
  flipFlopped += normalPhrase[normalPhrase.length - 1];
}

/* --- Display the flip-flopped string --- */

alert(flipFlopped);