"use strict";

/*
  refactor this program so it uses a `while` loop instead of a `for-of` loop
*/

let toBeFrogged = null;

while (toBeFrogged === null) {
   toBeFrogged = prompt(
      "enter some text to frogify.\n" +
         '- "f" will be replaced with "frog"\n' +
         '- "F" will be replaced with "FROG"'
   );
}

let frogged = "";
let word = "";

while (word.length < toBeFrogged.length) {
   if (toBeFrogged[word.length] === "f") {
      frogged += "frog";
   } else if (toBeFrogged[word.length] === "F") {
      frogged += "FROG";
   } else {
      frogged += toBeFrogged[word.length];
   }
   word += toBeFrogged[word.length];
}

alert(frogged);