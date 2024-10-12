// The charCodeAt() method returns the Unicode of the character at a specified index (position) in a string.

const testString2 = "This is a testing string";

// Characters   T   h   i   s       i   s       a       t   e   s   t   i   n   g       s   t   r   i   n   g
// Index        0   1   2   3   4   5   6   7   8   9   10  11  12  13  14  15  16  17  18  19  20  21  22  23

console.log("Encode")
console.log(testString2.charCodeAt(0));     // 84
console.log(testString2.charCodeAt(1));     // 104
console.log(testString2.charCodeAt(2));     // 105
console.log(testString2.charCodeAt(3));     // 115
console.log(testString2.charCodeAt(23));    // 103
console.log(testString2.charCodeAt(24));    // NaN
console.log(testString2.charCodeAt(-1));    // NaN

console.log("Decode")
console.log(String.fromCharCode(testString2.charCodeAt(0)));    // T
console.log(String.fromCharCode(testString2.charCodeAt(1)));    // h
console.log(String.fromCharCode(testString2.charCodeAt(2)));    // i
console.log(String.fromCharCode(testString2.charCodeAt(3)));    // s
console.log(String.fromCharCode(testString2.charCodeAt(23)));   // g

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
const text = "HELLO";
const encryptedText = text
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