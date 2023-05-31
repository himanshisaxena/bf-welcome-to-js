'use strict';

console.log('--- in execution phase ---');

/*
  environment: chrome

  name: ReferenceError
  message: tomatoes is not defined

  location: Line 21

  life cycle: Execution phase

  the mistake: Using tomatoes before it is declared

  the fix(es): Declare the tomatoes variable before using it in the console.log

*/

let tomatoes = 'fresh';

console.log(tomatoes); // ReferenceError: tomatoes is not defined
