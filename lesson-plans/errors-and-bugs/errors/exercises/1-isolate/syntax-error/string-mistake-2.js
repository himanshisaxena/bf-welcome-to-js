'use strict';

console.log('--- in execution phase ---');

/*
  environment: chrome

  name: SyntaxError
  message: Unexpected string

  location: 20

  life cycle: Execution phase

  the mistake: using '' inside the ''

  the fix(es): using "" insetad of ''
*/

const quotesInQuotes = 'remind yourself "i can do this!" at least once a day';

console.log(quotesInQuotes)