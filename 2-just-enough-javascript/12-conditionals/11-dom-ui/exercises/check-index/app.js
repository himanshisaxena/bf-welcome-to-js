import {
  whenFormDataChanges,
  readString,
  readNumber,
  displayString,
} from '../../../../../lib/dom-io/index.js';

whenFormDataChanges('search-input', () => {
  // debugger;
  console.log('--- form data changed ---');

  // --- read the user's input ---

  let text = readString('text');

  let character = readString('character');

  let i = readNumber('i');

  // --- check the index ---

  let searchResult = '';

  if (character.length < 1) {
    searchResult = 'oops!  you entered fewer than one character';
  } else if (character.length > 1) {
    searchResult = 'oops!  you entered more than one character';
  } else if (text[i] === character) {
    searchResult = 'yes';
  } else {
    searchResult = 'no';
  }

  // --- display the search results ---

  displayString('search-result', searchResult);
});