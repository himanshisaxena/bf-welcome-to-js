
'use strict';

console.log('--- in execution phase ---');

/*
  environment: chrome

  name: SyntaxError
  message: Invalid or unexpected token

  location: 20 & 21

  life cycle: Execution phase

  the mistake: divide the value into 2 lines

  the fix(es): fixed it to change value from two lines to one
*/

const a = 'this is two lines';

console.log(a);

