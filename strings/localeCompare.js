// The localeCompare() method in JavaScript is used to compare two strings in terms of their sort order based on the current locale. It returns a number indicating whether the reference string comes before, after, or is the same as the compared string in sort order.

// string.localeCompare(compareString, locales, options);
// compareString: The string to compare against the reference string.
// locales (optional): A string with a BCP 47 language tag or an array of such strings, which specifies the locale to use for the comparison. If omitted, the default locale of the environment is used.
// options (optional): An object that can contain various options to customize the comparison behavior (e.g., sensitivity, ignorePunctuation).

// EXAMPLES

// 1. Basic Comparison
const str1 = "apple";
const str2 = "banana";

console.log(str1.localeCompare(str2)); // Output: -1 (because "apple" comes before "banana")
console.log(str2.localeCompare(str1)); // Output: 1 (because "banana" comes after "apple")
console.log(str1.localeCompare("apple")); // Output: 0 (because they are the same)

// 2. Comparison with Different Locales
const str3 = "straße"; // German for "street"
const str4 = "strasse"; // Common spelling in English

console.log(str3.localeCompare(str4, 'de-DE')); // Output: 1 (because "ß" is considered different from "ss" in German)
console.log(str3.localeCompare(str4, 'en'));    // Output: -1 (in English "ß" is often treated as "ss")

// 3. Options for Customizing Comparison
const options = { sensitivity: 'base' }; // Ignores case and diacritics

console.log("café".localeCompare("cafe", 'en', options)); // Output: 0 (considered equal)
console.log("café".localeCompare("Café", 'en', options)); // Output: 0 (case is ignored)
