'use strict';

/* Dogify

  A user can input some text and all "d"s will be replaced with "dog".
    - given the user cancels:
        they are prompted again
    - given their input has any lower case "d"s:
        all "d"s are replaced with "dog"
    - given their input has any upper case "D"s:
        all "D"s are replaced with "DOG"
    - given their input has any upper & lower case "d"s:
        all "d"s are replaced with "dog"
        and all "D"s are replaced with "DOG"

  test cases:
    contains no "d"s:
      ' '           ->   ' '
      'abc'         ->   'abc'
      'market'      ->   'market'
    contains lower case "d"s:
      'd'           ->  'dog'
      'toad'        ->  'toadog'
      'disk'        ->  'dogisk'
      'Iddam'       ->  'Idogdogam'
    contains upper case "d"s:
      'D'           ->  'DOG'
      'ToaD'        ->  'ToaDOG'
      'Disk'        ->  'DOGisk'
      'iDDam'       ->  'iDOGDOGam'
    contains both upper and lower "d"s:
      'dD'          ->  'dogDOG'
      'Do dump'     ->  'DOGo dogump'
      'dim mooD'    ->  'dogim mooDOG'
*/

/* --- gather user input --- */

let userInput;
do {
  userInput = prompt('Please enter some text:');
} while (userInput === null);

/* --- replace "d"s with "dog" and "D"s with "DOG" --- */

let dogifiedText = '';
for (let i = 0; i < userInput.length; i++) {
  if (userInput[i] === 'd') {
    dogifiedText += 'dog';
  } else if (userInput[i] === 'D') {
    dogifiedText += 'DOG';
  } else {
    dogifiedText += userInput[i];
  }
}

/* --- display the dogified text to the user --- */

alert('Dogified text: ' + dogifiedText);