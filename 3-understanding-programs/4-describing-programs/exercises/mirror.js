// #todo

'use strict';

let text = null;
while (text === null) {
  text = prompt('Enter some text, it will be mirrored');
}

let mirrored = '|';
for (const character of text) {
  mirrored = character + mirrored + character;
}

alert(mirrored);
