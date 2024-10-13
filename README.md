# data-structure-and-algorithm

A collection of my solutions for mastering data structures and algorithms, focused on efficient implementation and clear documentation.

## Table of Contents

1. [Warmup Materials](#1-warmup-materials)
2. [How to Run a File](#2-how-to-run-a-file)
3. [String Methods](#string-methods)
4. [Array Methods](#array-methods)
   - [Mutator Methods](#mutator-methods-modify-the-array)
   - [Accessor Methods](#accessor-methods-do-not-modify-the-array-return-a-new-value)
   - [Iteration Methods](#iteration-methods-work-on-each-element-of-the-array)
5. [Common Methods Between String and Array](#common-methods-between-string-and-array)
6. [Regular Expressions (Regex)](#regular-expressions-regex)
   - [Basics](#basics)
   - [Quantifiers](#quantifiers)
   - [Flags](#flags)
   - [Examples](#examples)


## 1. Warmup Materials

- [Big O Cheat Sheet](https://www.freecodecamp.org/news/big-o-cheat-sheet-time-complexity-chart/)
- [Space Complexity Overview](https://www.engati.com/glossary/space-complexity)
- [Auxiliary Space vs. Space Complexity](https://www.geeksforgeeks.org/what-is-the-difference-between-auxiliary-space-and-space-complexity/)

### Outcome

After this, you should understand:

- **Big O Notation**
- **Time Complexity**
- **Space Complexity**
- **Big O Complexity Chart**
- **Big O Types of Complexities:**
  - Constant Time: **O(1)**
  - Linear Time: **O(n)**
  - Logarithmic Time: **O(log n)**
  - Linearithmic Time: **O(n log n)**
  - Quadratic Time: **O(n^2)**
  - Exponential Time: **O(2^n)**
  - Factorial Time: **O(n!)**
- **Space Complexity:**
  - Space Complexity Chart
  - Auxiliary Space
- **Notations Used to Calculate Time/Space Complexity:**
  - Big O Notation: **O(f(n))**
  - Omega Notation: **Ω(f(n))**
  - Theta Notation: **θ(f(n))**

## How to run a file?

1. Open terminal
2. Change directory to the file location
3. Run command `nodemon <file-name>.ts`, for example for file `chatAt.ts`:

```bash
$ nodemon charAt.ts
[nodemon] 3.1.0
[nodemon] to restart at any time, enter `rs`
[nodemon] watching path(s): *.*
[nodemon] watching extensions: ts,json
[nodemon] starting `ts-node charAt.ts`
Hello World
```

# String Methods

JavaScript provides a variety of string methods. Here are the most commonly used ones:

1. **`charAt()`** - Returns the character at a specified index.
2. **`charCodeAt()`** - Returns the Unicode of the character at a specified index.
3. **`concat()`** - Joins two or more strings.
4. **`includes()`** - Checks if a string contains a specified substring.
5. **`endsWith()`** - Checks if a string ends with a specified substring.
6. **`indexOf()`** - Returns the index of the first occurrence of a specified substring.
7. **`lastIndexOf()`** - Returns the index of the last occurrence of a specified substring.
8. **`localeCompare()`** - Compares two strings in the current locale.
9. **`match()`** - Searches a string for a match using a regular expression.
10. **`matchAll()`** - Returns all matches of a string against a regular expression.
11. **`padEnd()`** - Pads the current string with another string to a certain length (end).
12. **`padStart()`** - Pads the current string with another string to a certain length (start).
13. **`repeat()`** - Returns a new string with a specified number of copies of an existing string.
14. **`replace()`** - Replaces a specified value with another value in a string.
15. **`replaceAll()`** - Replaces all occurrences of a specified value.
16. **`search()`** - Searches a string for a match using a regular expression and returns its index.
17. **`slice()`** - Extracts a part of a string and returns it as a new string.
18. **`split()`** - Splits a string into an array of substrings.
19. **`startsWith()`** - Checks if a string starts with a specified substring.
20. **`substring()`** - Extracts characters between two specified indexes.
21. **`toLowerCase()`** - Converts the string to lowercase.
22. **`toUpperCase()`** - Converts the string to uppercase.
23. **`trim()`** - Removes whitespace from both sides of a string.
24. **`trimEnd()`** - Removes whitespace from the end of a string.
25. **`trimStart()`** - Removes whitespace from the start of a string.
26. **`valueOf()`** - Returns the primitive value of a string.

These are the primary string methods in JavaScript, but other built-in functions, like regular expression-based methods, can also work with strings.

# Array Methods

Here’s a list of JavaScript array methods with brief explanations:

### 1. **Mutator Methods (Modify the array):**

- **`push()`**: Adds one or more elements to the end of an array.
- **`pop()`**: Removes the last element from an array.
- **`shift()`**: Removes the first element from an array.
- **`unshift()`**: Adds one or more elements to the beginning of an array.
- **`splice()`**: Adds, removes, or replaces elements in an array.
- **`sort()`**: Sorts the elements of an array in place.
- **`reverse()`**: Reverses the order of the elements in an array.
- **`fill()`**: Fills the array with a static value from a start index to an end index.
- **`copyWithin()`**: Copies part of the array to another location within the same array.

### 2. **Accessor Methods (Do not modify the array, return a new value):**

- **`concat()`**: Merges two or more arrays into a new array.
- **`slice()`**: Returns a shallow copy of a portion of the array.
- **`includes()`**: Checks if an array includes a certain element.
- **`indexOf()`**: Returns the first index of a specified element, or -1 if not found.
- **`lastIndexOf()`**: Returns the last index of a specified element, or -1 if not found.
- **`join()`**: Joins all elements of an array into a string.
- **`toString()`**: Converts the array into a string.
- **`toLocaleString()`**: Converts the array into a localized string.
- **`at()`**: Returns the element at the specified index (supports negative indexing).

### 3. **Iteration Methods (Work on each element of the array):**

- **`forEach()`**: Executes a function once for each array element (no return value).
- **`map()`**: Creates a new array with the results of calling a function on every element.
- **`filter()`**: Creates a new array with all elements that pass a test.
- **`reduce()`**: Reduces the array to a single value, executing a reducer function on each element.
- **`reduceRight()`**: Same as `reduce()` but starts from the last element.
- **`every()`**: Checks if all elements pass a test.
- **`some()`**: Checks if at least one element passes a test.
- **`find()`**: Returns the first element that satisfies a test function.
- **`findIndex()`**: Returns the index of the first element that satisfies a test function.
- **`findLast()`**: Returns the last element that satisfies a test function.
- **`findLastIndex()`**: Returns the index of the last element that satisfies a test function.
- **`flat()`**: Flattens nested arrays into a single array.
- **`flatMap()`**: Maps and flattens the array in one step.
- **`entries()`**: Returns an array iterator object with key-value pairs.
- **`keys()`**: Returns an array iterator with the keys (indices) for each element.
- **`values()`**: Returns an array iterator with the values of each element.

This covers the core array methods in JavaScript with a one-line description of each.

## Common methods between String and Array

Following the the methods available with both strings and arrays.

- **`concat`**
- **`includes`**
- **`indexOf`**
- **`lastIndexOf`**

# Regular Expressions (Regex)

Here's a quick guide to regular expressions (regex) in JavaScript with examples to get you started:

### Basics

- **Literal characters**: `/abc/` matches the substring "abc".
- **Special characters** (need to be escaped with `\`):
  - `.`: Any character except newline.
  - `\d`: Any digit (0-9).
  - `\D`: Any non-digit.
  - `\w`: Any word character (alphanumeric + underscore).
  - `\W`: Any non-word character.
  - `\s`: Any whitespace character.
  - `\S`: Any non-whitespace character.
  - `\b`: Word boundary.
  - `\B`: Non-word boundary.
  - `^`: Start of a string.
  - `$`: End of a string.

### Quantifiers

- `*`: 0 or more times.
- `+`: 1 or more times.
- `?`: 0 or 1 time.
- `{n}`: Exactly n times.
- `{n,}`: At least n times.
- `{n,m}`: Between n and m times.

### Flags

- `g`: Global match (find all matches, not just the first).
- `i`: Case-insensitive.
- `m`: Multiline mode.

### Examples

1. **Simple match**:

   ```javascript
   const str = "Hello World";
   const regex = /Hello/;
   regex.test(str); // true
   ```

2. **Matching digits**:

   ```javascript
   const str = "I have 2 apples";
   const regex = /\d/;
   str.match(regex); // ["2"]
   ```

3. **Replacing with regex**:

   ```javascript
   const str = "foo bar baz";
   const result = str.replace(/bar/, "qux");
   console.log(result); // "foo qux baz"
   ```

4. **Global match**:

   ```javascript
   const str = "test1 test2 test3";
   const regex = /\d/g;
   str.match(regex); // ["1", "2", "3"]
   ```

5. **Word boundary example**:
   ```javascript
   const str = "word boundary test";
   const regex = /\btest\b/;
   regex.test(str); // true
   ```

You can test your regex on websites like [regex101](https://regex101.com/) for instant feedback.
