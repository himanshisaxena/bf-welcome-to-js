'use strict';
// declare a variable a and initilize it to the value 'Ewin'
let a = 'Ewin';
// let a = 'Tugba';
// let a = 'Jo';
// let a = 'Olesandra';
// read the varaible a
// declare a variable b and initilize it to the value 'Hello ' + Ewin + ', your name is '
let b = 'Hello ' + a + ', your name is ';
// executes conditonal statements
// read the variable a
// check the length of variable a
// check if the length of the value is greater than 4
// read variable b
// aasign variable b with the value 'Hello ' + 'Ewin' + ', your name is ' + b
if (a.length > 4) {
  // read variable b
  // aasign variable b with the value 'Hello ' + 'Ewin' + ', your name is ' + 'long'
  b = b + 'long.';
}
// check if the length of the value is equal to 4
// read variable b
// aasign variable b with the value 'Hello ' + 'Ewin' + ', your name is ' + 'perfect'
else if (a.length === 4) {
  b = b + 'perfect.';
}
// check if the length of the value is less than 4
else {
  // read variable b
  // aasign variable b with the value 'Hello ' + 'Ewin' + ', your name is ' + 'short'
  b = b + 'short.';
}
// read variable b which value is Hello Ewin, your name is perfect
console.log(b);
