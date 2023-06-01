'use strict';

/* Bouncify

  A user can enter some text to bouncify it.
    - given a non-empty string
      every other letter is converted to UPPER CASE
      every other letter is converted to lower case
      all other characters are ignored without changing the pattern

  test cases:
    has only letters:
      'a'           -> 'A'
      'Hello'       -> 'HeLlO'
      'HELLO'       -> 'HeLlO'
      'cheese'      -> 'ChEeSe'
    has spaces and letters:
      'good bye'      -> 'GoOd ByE'
      ' row a boat '  -> ' RoW a BoAt '
    has everything:
      '12 Good Byes!'     -> '12 GoOd ByEs!'
      'h1! Hoe gaat het?' -> 'H1! hOe GaAt HeT?'
      '0 . x . 0'         -> '0 . X . 0'

*/

// a variable to store the userInput
let text = '';
while (true) {
  // in case null
  const userInput = prompt('Please enter something : ');
  if (userInput === null) {
    alert('there is no escape!');
    continue;
  }
  // in case empty string
  if (userInput === '') {
    alert('no empty string allowed');
    continue;
  }
  // if userInput
  if (userInput) {
    text = userInput;
    break;
  }
}
// The string into an array, maps through each of its word and converts them to uppercase or lowercase based on their index.
// Arrow Function:
let changeCase = (str) => {
  // Declare a variable newStr and initilize it to the value 'str'
   let newStr = str
   .split("")
   .map((word, index) => {
     // Excuted conditinal statement
      if(index % 2 === 0){
         return word.toLowerCase();
      }else{
         return word.toUpperCase();
      }
   })
   // It converts the array back into a string and returns it.
   .join("");
   return newStr;
};
alert(changeCase(text));

