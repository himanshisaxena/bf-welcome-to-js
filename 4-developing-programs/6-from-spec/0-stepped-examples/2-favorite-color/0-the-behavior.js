'use strict';

/* Favorite Color

  the user can enter their favorite word and be told if it is long or short.
    - given the user cancels, they will be prompted again
    - given the input is empty, they will be prompted again
    - given their input is 7 characters or longer:
        they are told it is a long word
    - given their input is shorter than 7 characters:
        they are told it is a short word


  test cases:
    long words:
      'abcdefg' -> '"abcdefg" is a long word'
      'computer' -> '"computer" is a long word'
      'cybersecurity' -> '"cybersecurity" is a long word'
    short words:
      'abcdef' -> '"abcdef" is a short word'
      'jello' -> '"jello" is a short word'
      'hi' -> '"hi" is a short word'
*/

/* Favorite Color */

/* --- get a word from the user --- */
let word = '';

while (word.length === 0) {
  word = prompt('Enter your favorite word');
}

/* --- determine if the word is long or short --- */
let message;

if (word.length >= 7) {
  message = `"${word}" is a long word`;
} else {
  message = `"${word}" is a short word`;
}

/* --- display the message to the user --- */
alert(message);