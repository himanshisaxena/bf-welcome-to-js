'use strict';

console.log('--- in execution phase ---');

/*
  environment: chrome

  name: SyntaxError
  message: Invalid left-hand side in assignment

  location: 22

  life cycle: Execution phase

  the mistake: value before variable

  the fix(es): variable before the value
*/

let isHappy = false;

isHappy = true;

console.log(isHappy);