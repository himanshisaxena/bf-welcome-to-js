'use strict'

/*
modify the program so it searches for only an uppercase "A"

you will need to change one condition
the user's instructions
and strings used to generate a reaction
*/

const userInput = prompt('Please enter something with an uppercase "A" in it');

let reaction;
if (userInput === null || userInput === '') {
reaction = 'Nothing! Why???';
} else if (userInput.includes('A')) {
reaction = '"' + userInput + '" is perfect!';
} else {
reaction = '"' + userInput + '" does not contain an uppercase "A"';
}

alert(reaction);