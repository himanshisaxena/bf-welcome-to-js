'use strict';

/*
  _a:
    declaration: 
      init: yes
      types: object
      scopes: global
    reads: 5
      scopes: glopal, local
      checks: while
    assignments: 1
      types: string
      scopes: global

      _b:
    declaration: 
      init: yes
      types: string
      scopes: global
    reads: 4
      scopes: glopal, local
      checks: while
    assignments: 1
      types: string
      scopes: global

      _c:
    declaration: 
      init: yes
      types: boolean
      scopes: global
    reads: 2
      scopes: else if
      checks: while
    assignments: 1
      types: boolean
      scopes: if
*/

alert(
  'this is a two-player game:\n\n' +
    '- player 1: enters an animal\n' +
    '- player 2: says something cool about it',
);

// _a: declare, null
let _a = null;
// _a: read
while (_a === null) {
  // _a: write, sting or null
  _a = prompt('enter an animal');
}

// _b: declare, string
let _b = '';

// _c declare, false
let _c = false;

// _c: read
while (!_c) {
  // _b: write, string
  _b = prompt('tell me something about ' + _a);
  // _a: read
  // _b: read
  if (_b === '' || _b === null) {
    alert('that is not something');
  } else if (_b.toLowerCase().includes(_a.toLowerCase())) {
    // _c: read
    _c = true;
  } else {
    alert('nope, not about ' + _a + '.  try again.');
  }
}

// _a: read
// _b: read
alert('i just learned something cool about ' + _a + '!\n\n- "' + _b + '"');