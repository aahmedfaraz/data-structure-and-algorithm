// In JavaScript, endsWith() and startsWith() are methods used to check if a string starts or ends with a specific substring. Both methods return a boolean value (true or false).

// string.endsWith(searchString, length);
// searchString: The substring to search for at the end of the string.
// length (optional): The length of the string to consider when checking. Defaults to the string's length.

const filename = "report.pdf";
console.log(filename.endsWith(".pdf")); // Output: true
console.log(filename.endsWith(".doc")); // Output: false
console.log(filename.endsWith("report", 6)); // Output: true (checks the first 6 characters)
