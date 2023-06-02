// #todo

'use strict';

// your answers must use typeof, but can use any values
console.log('-- write 2 values with the type "boolean" --');
console.log(typeof true); // 'boolean'
console.log(typeof false); // 'boolean'

console.log('-- write 1 value with the type "object" --');
const object = {name: 'It is an object'}
console.log(typeof object); // 'object'

console.log('-- write 5 values with the type "string" --');
// examples
console.log(typeof 'hello'); // 'string'
console.log(typeof ''); // 'string'
// exercises
console.log(typeof '2500'); // 'string'
console.log(typeof 'Love coding'); // 'string'
console.log(typeof '1'); // 'string'
console.log(typeof 'Good night'); // 'string'
console.log(typeof object.name); // 'string'

console.log('-- write 5 values with the type "number" --');
// examples
console.log(typeof 0); // 'number'
console.log(typeof 18.5); // 'number'
// exercises
console.log(typeof 25.20); // 'number'
console.log(typeof 150); // 'number'
console.log(typeof parseInt('50')); // 'number'
console.log(typeof parseFloat('5.25632')); // 'number'
console.log(typeof -1.25); // 'number'