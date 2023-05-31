'use strict';

console.log('--- in execution phase ---');

/*
  environment:

  name: ReferenceError
  message: isValidUserName is not defined
  location: Line 24
  life cycle: Creation phase -> Execution phase
  the mistake: Using isValidUserName before it is declared
  the fix(es): Declare the isValidUserName variable before using it in the if statement
*/

const userName = 'chiobin';
console.log('userName:', typeof userName, userName);

let isValidUserName;

if (userName.length > 3) {
  isValidUserName = true; // ReferenceError: isValidUserName is not defined
}


if (userName.length <= 3) {
  isValidUserName = false;
}

console.log('isValidUserName:', typeof isValidUserName, isValidUserName);