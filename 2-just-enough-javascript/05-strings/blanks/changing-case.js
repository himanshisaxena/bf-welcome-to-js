'use strict';

// fill in the _ to complete the exercises

console.log('Xyz'.toLowerCase()); // 'xyz'
console.log('xyZ'.toUpperCase()); // 'XYZ'

// find 4 different ways to create each value using a string method

console.log('Apple'.toLowerCase()); // 'apple'
console.log('apple'.toUpperCase().toLowerCase()); // 'apple'
console.log('apple'.split()[0]); // 'apple'
console.log('abc'.replace("abc", "apple")); // 'apple'

console.log('pie'.toUpperCase()); // 'PIE'
console.log('PIE'.toLowerCase().toUpperCase()); // 'PIE'
console.log('pie'.split()[0].toUpperCase()); // 'PIE'
console.log('def'.replace("def", "pie").toUpperCase()); // 'PIE'