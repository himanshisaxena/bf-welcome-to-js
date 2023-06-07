'use strict';

/*
modify the program to search for "coffee" in the user's input

upper or lower case is your choice
*/

const userInput = prompt('Please enter something that mentions "coffee"');

let reaction;
if (userInput === null || userInput === '') {
reaction = 'Nothing! Why???';
} else if (userInput.toLowerCase().includes('coffee')) {
reaction = '"' + userInput + '" mentions "coffee"';
} else {
reaction = '"' + userInput + '" does not mention "coffee"';
}

alert(reaction);