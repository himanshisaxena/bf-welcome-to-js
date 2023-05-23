'use strict';

/* Value Swap

  Can you predict what the [trace] button will log to the console?
    use the [table] button to write down your predictions

  study tips: [variables], [open in] jsTutor, [ask me]

*/
// declare a variable a and initilize it to the value 'y'
let a = 'y';
// declare a variable b and initilize it to the value 'x'
let b = 'x';
// declare a variable t and initilize it to the value ''
let t = '';
// read the varaible a, b, t which value is y, x
console.log(a, b, t);
// read the varaible a
// assign the varaible b to the value 't' which value is 'y'
t = a;
// read the varaible b
// assign the varaible b to the value 't' which value is 'x'
a = b;
// read the varaible t
// assign the varaible b to the value 't' which value is 'y'
b = t;
// read the variable which value is x , y , y
console.log(a, b, t);

// what did you do in this program?
// declare variable and intialize and after overwrite the values.
// what are the final values of `a` and `b`?
// a = 'x' and b = 'y'
// how are they changed from the initial values
// they was assign with another value
// is it possible to swap a and b without using t?
// Yes
