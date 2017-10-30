// This file has some linting errors to make sure
// that your linter works correctly.
// It also gives some examples of how to work around the linter.


// This should give an eslint error (no-array-contractor)
const items = new Array();


// This should give an eslint warning (no-console)
console.log(items);


/* eslint-disable */
// This next line should cause an error, but eslint is disabled between this block.
const name = "Strings should usually use single quotes."
/* eslint-enable */


// You can also set it to just ignore the next line.
// eslint-disable-next-line
const another = new Array();


// This next one will ignore "no-unused-vars", but the array declaration is still linted.
// eslint-disable-next-line no-unused-vars
const noUnusedIsFine = new Array();
