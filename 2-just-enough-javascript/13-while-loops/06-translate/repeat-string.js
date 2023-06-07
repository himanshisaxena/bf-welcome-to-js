'use strict';

/*

  Data In:
    - User input (string)

  Data Out:
    - Alert message with repeated input (string)

  Test Cases: zz ->
              zz
              zz

*/

let input = null;

while (input === null) {
  input = prompt('enter some text');
}

let repeated = '';
let i = 0;

while (i < input.length) {
  repeated += '\n' + input;
  i++;
}

alert(repeated);