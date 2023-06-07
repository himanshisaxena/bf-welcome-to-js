'use strict';

/*

  Data In:
    - User input for first name (string)
    - User input for last name (string)

  Data Out:
    - Alert with the full name (string)

  Test Cases: Himanshi --> Himanshi

*/

let firstName = null;

while (firstName === null) {
  firstName = prompt('enter a first name');
}

let lastName = null;

while (lastName === null) {
  lastName = prompt('enter a last name');
}

let fullName = firstName + ' ' + lastName;

alert(fullName);