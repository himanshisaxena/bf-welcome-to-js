'use strict';

console.log('--- in execution phase ---');

/*
  environment: chrome

  name: SyntaxError
  message: Identifier 'tree' has already been declared

  location: 22

  life cycle: Execution phase

  the mistake: we cant declare variable twice

  the fix(es): reassing the value
*/

let tree = 'oak';

tree = 'birch';