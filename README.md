# data-structure-and-algorithm

A collection of my solutions for mastering data structures and algorithms, focused on efficient implementation and clear documentation.

## Table of Contents

1. [Warmup Materials](#warmup-materials)
2. [How to run a file?](#how-to-run-a-file?)

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

1. **charAt()** - Returns the character at a specified index.
2. **charCodeAt()** - Returns the Unicode of the character at a specified index.
3. **concat()** - Joins two or more strings.
4. **includes()** - Checks if a string contains a specified substring.
5. **endsWith()** - Checks if a string ends with a specified substring.
6. **indexOf()** - Returns the index of the first occurrence of a specified substring.
7. **lastIndexOf()** - Returns the index of the last occurrence of a specified substring.
8. **localeCompare()** - Compares two strings in the current locale.
9. **match()** - Searches a string for a match using a regular expression.
10. **matchAll()** - Returns all matches of a string against a regular expression.
11. **padEnd()** - Pads the current string with another string to a certain length (end).
12. **padStart()** - Pads the current string with another string to a certain length (start).
13. **repeat()** - Returns a new string with a specified number of copies of an existing string.
14. **replace()** - Replaces a specified value with another value in a string.
15. **replaceAll()** - Replaces all occurrences of a specified value.
16. **search()** - Searches a string for a match using a regular expression and returns its index.
17. **slice()** - Extracts a part of a string and returns it as a new string.
18. **split()** - Splits a string into an array of substrings.
19. **startsWith()** - Checks if a string starts with a specified substring.
20. **substring()** - Extracts characters between two specified indexes.
21. **toLowerCase()** - Converts the string to lowercase.
22. **toUpperCase()** - Converts the string to uppercase.
23. **trim()** - Removes whitespace from both sides of a string.
24. **trimEnd()** - Removes whitespace from the end of a string.
25. **trimStart()** - Removes whitespace from the start of a string.
26. **valueOf()** - Returns the primitive value of a string.

These are the primary string methods in JavaScript, but other built-in functions, like regular expression-based methods, can also work with strings.

# Array Methods

JavaScript provides a wide range of array methods. Here are the commonly used ones:

### 1. **Mutator Methods (Modify the array):**

- `push()`
- `pop()`
- `shift()`
- `unshift()`
- `splice()`
- `sort()`
- `reverse()`
- `fill()`
- `copyWithin()`

### 2. **Accessor Methods (Do not modify the array, return a new value):**

- `concat()`
- `slice()`
- `includes()`
- `indexOf()`
- `lastIndexOf()`
- `join()`
- `toString()`
- `toLocaleString()`
- `at()`

### 3. **Iteration Methods (Work on each element of the array):**

- `forEach()`
- `map()`
- `filter()`
- `reduce()`
- `reduceRight()`
- `every()`
- `some()`
- `find()`
- `findIndex()`
- `findLast()`
- `findLastIndex()`
- `flat()`
- `flatMap()`
- `entries()`
- `keys()`
- `values()`

In total, there are over **30 array methods** in JavaScript.

## Common methods between String and Array

Following the the methods available with both strings and arrays.

- `concat`
- `includes`
- `indexOf`
- `lastIndexOf`
