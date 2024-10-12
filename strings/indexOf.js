// The indexOf() method in JavaScript is used to find the first occurrence of a specified value within a string or an array. It returns the index of the value if found, or -1 if the value is not found.

// string.indexOf(searchValue, fromIndex);
// searchValue: The substring to search for.
// fromIndex (optional): The index at which to start the search. Defaults to 0.

const text = "The quick brown fox jumps over the lazy dog.";

console.log(text.indexOf("quick")); // Output: 4 (index where "quick" starts)
console.log(text.indexOf("cat"));   // Output: -1 (not found)
console.log(text.indexOf("o", 10)); // Output: 12 (searching for "o" starting from index 10)
