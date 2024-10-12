// The charCodeAt() method in JavaScript retrieves the Unicode (UTF-16) character code of the character at a specified index in a string. This can be useful for understanding the numeric representation of characters.

// string.charCodeAt(index);
// index: The zero-based index of the character whose Unicode value you want to retrieve.

const text = "Hello, World!";

// Get the character codes
const charCodeH = text.charCodeAt(0); // Unicode for 'H' -> 72
const charCodeW = text.charCodeAt(7); // Unicode for 'W' -> 87
const charCodeExclamation = text.charCodeAt(12); // Unicode for '!' -> 33

console.log(charCodeH); // Output: 72
console.log(charCodeW); // Output: 87
console.log(charCodeExclamation); // Output: 33

// Convert character codes back to characters
const charH = String.fromCharCode(charCodeH); // 'H'
const charW = String.fromCharCode(charCodeW); // 'W'
const charExclamation = String.fromCharCode(charCodeExclamation); // '!'

console.log(charH); // Output: "H"
console.log(charW); // Output: "W"
console.log(charExclamation); // Output: "!"

// =========================
// Use-Cases
// =========================

// 1. String Manipulation and Comparison 
// Example: Convert a character to its uppercase equivalent (and vice versa) without using built-in methods.

const char = 'a';
const upperChar = String.fromCharCode(char.charCodeAt(0) - 32);     // A
console.log(upperChar)
const char2 = 'B';
const lowerChar = String.fromCharCode(char2.charCodeAt(0) + 32);    // b
console.log(lowerChar)

// 2. Custom Sorting
// Example: Sorting strings based on ASCII value.

const strings = ['b', 'a', 'c'];
strings.sort((a, b) => a.charCodeAt(0) - b.charCodeAt(0));
console.log(strings); // Outputs: ['a', 'b', 'c']

// 3. Creating Custom Encryption/Decryption
// Example: Implementing a Caesar Cipher.

const shift = 3;
const str = "HELLO";
const encryptedText = str
    .split('')
    .map(char => String.fromCharCode(char.charCodeAt(0) + shift))
    .join('');

console.log(encryptedText); // Outputs: 'KHOOR'

// 4. Handling Special Characters
// Example: Identify newline characters and replace them.

const stringWithNewline = "Hello\nWorld";
const modifiedString = stringWithNewline
    .split('')
    .map(char => (char.charCodeAt(0) === 10 ? ' ' : char)) // Replace newline with space
    .join('');

console.log(modifiedString); // Outputs: 'Hello World'

// 5. Working with Unicode Characters
// Example: Accessing Unicode characters by their code.

const smileyFace = String.fromCharCode(0x1F600); // Unicode for 😀
console.log(smileyFace); // Outputs: 😀

// Summary of Common Use Cases:
// - String manipulation (case conversion, comparison)
// - Custom sorting
// - Encryption/Decryption (like Caesar cipher)
// - Identifying or replacing special characters (newline, tab)
// - Handling keyboard events in the browser
// - Working with Unicode (symbols, emojis)
// - Data serialization (text-to-bytes conversion)