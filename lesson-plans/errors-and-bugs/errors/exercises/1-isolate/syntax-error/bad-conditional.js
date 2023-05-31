'use strict';

console.log('--- in execution phase ---');

/*
  environment: chrome

  name: syntaxError
  message: unexpected token '{'

  location: line 27

  life cycle: Execution phase

  the mistake: using else two times

  the fix(es): add else if instead else
*/

let userName = 'indrogo';

if (userName.length < 3) {
  console.log('too short');
} else if (userName.length < 5) {
  console.log('just right');
} else {
  console.log('too long');
}