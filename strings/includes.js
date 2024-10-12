// In JavaScript, the includes() method is used to determine whether an array or a string contains a certain element or substring. It returns true if the element or substring is found and false otherwise.

// array.includes(value, fromIndex);
// value: The value to search for in the array.
// fromIndex (optional): The index at which to begin the search. Defaults to 0.

const sentence = "The quick brown fox jumps over the lazy dog.";
console.log(sentence.includes("quick")); // Output: true
console.log(sentence.includes("cat")); // Output: false
console.log(sentence.includes("over", 20)); // Output: true (starts searching from index 20)
