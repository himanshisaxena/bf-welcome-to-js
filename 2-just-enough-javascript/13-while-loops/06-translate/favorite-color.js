'use strict';

/*

  Data In:
    - User input (string)

  Data Out:
    - Alert message is this correct? "blue"
    - Alert your favorite color is blue

  Test Cases: 'blue'

*/

let message = 'your favorite color is ';
let unconfirmed = true;

while (unconfirmed) {
  let input = prompt('what is your favorite color?');
  
  if (input === null) {
    alert('there is no escape');
  } else {
    let confirmed = confirm('is this correct? "' + input + '"');
    if (confirmed === true) {
      message = message + input;
      unconfirmed = false;
    }
  }
}

alert(message);