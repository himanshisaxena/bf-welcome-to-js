// #todo

'use strict';

let noun = null;
while (noun === null) {
  noun = prompt('Enter a noun');
}

let verb = null;
while (verb === null) {
  verb = prompt('Enter a verb');
}

let adjective = null;
while (adjective === null) {
  adjective = prompt('Enter an adjective');
}

const madlib = 'the ' + adjective + ' ' + noun + ' likes to ' + verb;

alert(madlib);
