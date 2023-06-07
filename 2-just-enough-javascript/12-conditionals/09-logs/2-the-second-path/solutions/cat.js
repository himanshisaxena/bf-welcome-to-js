'use strict';

let input = prompt('enter "cat"');

let path = 0;
if (input === 'cat') {
  path = 1;
} else if (input === null) {
  path = 3;
} else {
  path = 2;
}

console.log(path);