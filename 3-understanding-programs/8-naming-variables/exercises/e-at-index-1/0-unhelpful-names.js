// #todo

'use strict';

/*
  _a:
    declaration: 
      init: yes
      types: number
      scopes: global
    reads: 3
      scopes: glopal, local
      checks: while, if condition
    assignments: 0
      types: number
      scopes: 

      _b:
    declaration: 
      init: yes
      types: string
      scopes: global
    reads: 4
      scopes: glopal, while
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

alert('you will need to enter strings with "e" in the right place');

let _a = 0;

let _b = 'entries:';

let _c = true;
while (_c) {
  let _d = prompt('_d a string with "e" at index ' + _a);

  if (_d === null) {
    _c = !confirm('are you sure you want to exit?');
  } else if (_d[_a] === 'e') {
    _b = _b + '\n' + _a + '. "' + _d + '"';
    _a = _a + 1;
  } else {
    _b = _b + '\nx. "' + _d + '"';
    _c = false;
  }
}

alert('your score: ' + _a + '\n\n' + _b);