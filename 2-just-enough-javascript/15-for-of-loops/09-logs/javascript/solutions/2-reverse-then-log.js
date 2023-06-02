'use strict';

let backwards = 'tpircsavaj';
let language = '';

for (let letter of backwards) {
  language = letter + language;
}

for (let char of language) {
  console.log(char);
}