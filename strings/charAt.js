// The charAt() method in JavaScript is used to return the character at a specified index in a string. It is a simple way to access individual characters in a string.

// string.charAt(index);
// index: The zero-based index of the character you want to retrieve from the string.

const text = "Hello, World!";

console.log(text.charAt(0)); // Output: "H" (character at index 0)
console.log(text.charAt(7)); // Output: "W" (character at index 7)
console.log(text.charAt(12)); // Output: "!" (character at index 12)
console.log(text.charAt(13)); // Output: "" (index out of bounds)
console.log(text.charAt(-1)); // Output: "" (negative index)

// Alternative Using Bracket Notation
console.log(text[0]); // Output: "H"
console.log(text[7]); // Output: "W"
console.log(text[12]); // Output: "!"
