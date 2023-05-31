'use strict';

let input1 = null;
while (input1 === null || input1.length !== 5) {
  input1 = prompt('enter the first 5 characters:');
}

let input2 = null;
while (input2 === null || input2.length !== 5) {
  input2 = prompt('enter the last 5 characters:');
}

let input = input1 + input2;
let message = 'thank you for "' + input + '"!';

alert(message);


/*  ===== Challenges =====
  - Change the condition to 10 characters.
  - Make the user write "everything" in 2 steps.
*/
