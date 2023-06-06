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
      checks: while, for of
    assignments: 1
      types: string
      scopes: while

_b:
    declaration:
      init: yes
      types: string
      scopes: global 
    reads: 2
      scopes: for of, global
    assignments: 1
      types: string 
      scopes: for of

      _c:
    declaration:
      init: yes
      types: string
      scopes: for of
    reads: 2
      scopes: for of

      _d:
    declaration:
      init: yes
      types: string
      scopes: for of
    reads: 1
      checks: if

*/

let _a = null;
while (_a === null) {
  _a = prompt('enter some text, the program will remove all vowels');
}

let _b = '';
for (let _c of _a) {
  let _d = 'aeiou'.includes(_c.toLowerCase());
  if (!_d) {
    _b = _b + _c;
  }
}

alert(_b);