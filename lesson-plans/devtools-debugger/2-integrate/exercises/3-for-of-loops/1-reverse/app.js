import {
  whenFormDataChanges,
  readString,
  readBoolean,
  displayString,
} from '../../../../../../lib/dom-io/index.js';

whenFormDataChanges('reversify', () => {


  console.log('--- form data changed ---');

  // --- read user input ---

  let text = readString('to-reverse');
  //let screaming = readBoolean('loud');

 // console.log(text, screaming);

  // --- reverse the string input ---


   // --- reverse the string input and ensure unique characters ---

  let reversed = '';
  let uniqueCharacters = new Set();
  for (let i = text.length - 1; i >= 0; i--) {
    if (!uniqueCharacters.has(text[i])) {
      reversed += text[i];
      uniqueCharacters.add(text[i]);
    }
  }
   

   // --- set to upper or lower case based
   let finalText = '';
   if ( text .length > 5) {
   console.log('>5')
    finalText = reversed.toUpperCase();
 } 

    else if ( text.length < 5 ) 
  {
     console.log(' < 5')
    finalText = reversed.toLowerCase();
  }

else {
   console.log('normal')
  finalText = reversed ;
}

 displayString('out', finalText);
   console.log(finalText);

});



/*  ===== Challenges =====

  - change the condition so upper/lower case depends on the length of the input
      longer inputs are upper case
      medium inputs are not changed
      shorter inputs are lower case
  - make sure each character appears only once in the reversed text

*/


