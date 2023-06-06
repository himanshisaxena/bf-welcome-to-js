// #todo

'use strict';

let adjective = null;
while (adjective === null) {
  adjective = prompt('Enter an adjective');
}

let noun = null;
while (noun === null) {
  noun = prompt('Enter a noun');
}

let verb = null;
while (verb === null) {
  verb = prompt('Enter a verb');
}

let phrase = 'The ';
phrase = phrase + adjective + ' ';
phrase = phrase + noun + ' likes to ';
phrase = phrase + verb;

alert(phrase);
