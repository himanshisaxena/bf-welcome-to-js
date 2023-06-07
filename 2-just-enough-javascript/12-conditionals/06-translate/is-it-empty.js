'use strict';

/*


  Data In: let

  Data Out: 

  Test Cases:
    Data In: 'hello'
    Data Out: your input is not empty

    Data In: ''
    Data Out: your input is empty

    Data In: null
    Data Out: your input is null

*/

const input = prompt('do whatever you want');

let message = 'your input is ';

if (input === null) {
  message = message + 'null';
} else {
  let maybeNot = '';
  if (input.length !== 0) {
    maybeNot = 'not ';
  }
  message = message + maybeNot + 'empty';
}

alert(message);