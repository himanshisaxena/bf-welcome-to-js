'use strict';

while (true) {
  let input = prompt('Enter "exit" to quit');
  if (input === 'exit') {
    break; 
  }
  console.log(input);
}

alert('Thank you!');

/*  ===== Challenges =====
  - Try to create an infinite loop so the user gets stuck inside your prompt.
*/
