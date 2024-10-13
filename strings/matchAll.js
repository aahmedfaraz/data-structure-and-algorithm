// The matchAll() method in JavaScript returns an iterator of all matches of a regular expression in a string. It provides more comprehensive information than the match() method, especially when dealing with global matches. Each match includes information about capturing groups as well.

// string.matchAll(regexp);
// regexp: A regular expression object or a string representing the regular expression pattern. The regex must have the g (global) flag to find all matches.

// Return Value
// Returns an iterator containing arrays of all matches. Each array contains the entire matched string followed by any capturing groups.
// If there are no matches, it returns an empty iterator.

// Example 1: Basic Usage
const text = "The rain in Spain stays mainly in the plain.";

// Match all occurrences of "in"
const matches = text.matchAll(/in/g);

// Convert iterator to an array
const result = Array.from(matches);
console.log(result);
/*
Output:
[
  [
    'in', index: 6, input: 'The rain in Spain stays mainly in the plain.', groups: undefined,
  ],
  [
    'in', index: 9, input: 'The rain in Spain stays mainly in the plain.', groups: undefined,
  ],
  [
    'in', index: 15, input: 'The rain in Spain stays mainly in the plain.', groups: undefined,
  ],
  [
    'in', index: 26, input: 'The rain in Spain stays mainly in the plain.', groups: undefined,
  ],
  [
    'in', index: 31, input: 'The rain in Spain stays mainly in the plain.', groups: undefined,
  ],
  [
    'in', index: 41, input: 'The rain in Spain stays mainly in the plain.', groups: undefined,
  ]
]
*/

// Example 2: Using Capturing Groups
const text2 = "My phone number is 123-456-7890.";

// Match phone number pattern with capturing groups
const phoneMatches = text2.matchAll(/(\d{3})-(\d{3})-(\d{4})/g);
console.log(phoneMatches) // Object [RegExp String Iterator] {} - No use, we need to convert it to array

// Convert iterator to an array
const phoneResults = Array.from(phoneMatches);
console.log(phoneResults);
/*
Output:
[
  [
    '123-456-7890', '123', '456', '7890', index: 19, input: 'My phone number is 123-456-7890.', groups: undefined
  ]
]
*/

// Example 3: No Matches
// If there are no matches, matchAll() returns an empty iterator.

const text3 = "Hello, World!";
const noMatch = text3.matchAll(/foo/g);

// Convert iterator to an array
const noMatchResults = Array.from(noMatch);
console.log(noMatchResults); // Output: []
