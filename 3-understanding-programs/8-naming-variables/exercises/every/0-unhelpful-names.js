// #todo

'use strict';

/*
  _a:
    declaration:
      init: yes
      types: object
      scopes: global
    reads: 3
      scopes: while
      checks: xhile, for of
    assignments: 1
      types: string
      scopes: while

_b:
    declaration:
      init: yes
      types: string
      scopes: global
    reads: 1
      scopes: for of

      _c:
    declaration:
      init: yes
      types: boolean
      scopes: global
    reads: 1
      scopes: global
    assignments: 
      types: boolean
      scopes: for of

      _d:
    declaration:
      init: yes
      types: string
      scopes: for of
    reads: 1
      scopes: for of

      _e:
    declaration:
      init: yes
      types: string
      scopes: for of
    reads: 1
      checks: if
*/

let _a = null;
while (_a === null) {
  _a = prompt('enter some text, the program will check if it is only vowels');
}

let _b = 'aeiou';

let _c = true;
for (let _d of _a) {
  let _e = _b.includes(_d.toLowerCase());
  if (!_e) {
    _c = false;
    break;
  }
}

alert(_c);