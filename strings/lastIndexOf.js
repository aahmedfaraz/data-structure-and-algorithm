// The lastIndexOf() method in JavaScript is used to find the last occurrence of a specified value within a string or an array. It returns the index of that occurrence or -1 if the value is not found.

// string.lastIndexOf(searchValue, fromIndex);
// searchValue: The substring to search for.
// fromIndex (optional): The index at which to start the search, searching backwards. Defaults to the length of the string.

const text = "The quick brown fox jumps over the lazy dog. The dog barked.";

console.log(text.lastIndexOf("dog")); // Output: 43 (last occurrence of "dog")
console.log(text.lastIndexOf("cat")); // Output: -1 (not found)
console.log(text.lastIndexOf("o", 30)); // Output: 12 (searching backwards from index 30)
