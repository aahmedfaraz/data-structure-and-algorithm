// The match() method in JavaScript is used to search a string for a match against a regular expression (regex) and returns the matched results as an array. If no matches are found, it returns null.

// string.match(regexp);
// regexp: A regular expression object or a string representing the regular expression pattern.

// Return Value
// An array containing the matched results. The first element of the array is the entire matched string, and subsequent elements are the capturing groups, if any.
// Returns null if there are no matches.

// Example 1: Basic Match
const text1 = "The quick brown fox jumps over the lazy dog.";
// Match all occurrences of the word "the" (case-insensitive)
const matches = text1.match(/the/gi);
console.log(matches); // Output: ["The", "the"] (case-insensitive match)

// Example 2: Using Regex with Capturing Groups
const text2 = "My phone number is 123-456-7890.";
// Match a phone number pattern
const phoneMatch = text2.match(/(\d{3})-(\d{3})-(\d{4})/);
console.log(phoneMatch);
// Output: 
// [
//     '123-456-7890',
//     '123',
//     '456',
//     '7890',
//     index: 19,
//     input: 'My phone number is 123-456-7890.',
//     groups: undefined
// ]
// The first element is the full match, and subsequent elements are the capturing groups

// Example 3: Global Flag with g
// When using the g (global) flag, the match() method returns an array of all matches without capturing groups.
const text3 = "The rain in Spain stays mainly in the plain.";
// Match all occurrences of "in"
const allMatches = text3.match(/in/g);
console.log(allMatches); // Output: [ 'in', 'in', 'in', 'in', 'in', 'in' ]

// Example 4: No Matches
// If there are no matches, match() returns null.
const text4 = "Hello, World!";
const noMatch = text4.match(/foo/);
console.log(noMatch); // Output: null