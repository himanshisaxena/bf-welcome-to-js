// #todo

'use strict';

/*


  Data In: I like a cat. 

  Data Out: I like a cat. -> Ilikeacat.

  Test Cases: I like a cat. expexted: I like a cat. -> Ilikeacat.

*/

/* ---   ?   --- */

let input = null;

while(true){
  input = prompt('enter something with at least one space, the spaces will be removed');
  if(input === null){
    alert('no escape');
    continue;
  }
  if(input === ''){
    alert('gotta enter something')
    continue;
  }
  if(!input.includes(' ')){
    alert('there must be a space!');
    continue;
  }
  break;
  }


/* ---   ?   --- */

let spaceless = '';

for( let char of input){
  if (char !== ' '){
   spaceless = spaceless + char
  }
}

/* ---   ?   --- */

alert(input + ' -> ' + spaceless);