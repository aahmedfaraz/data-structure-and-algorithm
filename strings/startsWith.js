// In JavaScript, endsWith() and startsWith() are methods used to check if a string starts or ends with a specific substring. Both methods return a boolean value (true or false).

// string.startsWith(searchString, position);
// searchString: The substring to search for at the beginning of the string.
// position (optional): The position in the string to begin the search. Defaults to 0.

const message = "Hello, World!";
console.log(message.startsWith("Hello")); // Output: true
console.log(message.startsWith("World")); // Output: false
console.log(message.startsWith("lo", 3)); // Output: true (starts searching from index 3)
