const testString = "This is a testing string";

// Characters   T   h   i   s       i   s       a       t   e   s   t   i   n   g       s   t   r   i   n   g
// Index        0   1   2   3   4   5   6   7   8   9   10  11  12  13  14  15  16  17  18  19  20  21  22  23

console.log(testString.charAt(0)) // T
console.log(testString.charAt(10)) // t
console.log(testString.charAt(15)) // n
console.log(testString.charAt(20)) // r
console.log(testString.charAt(-1)) // 
console.log(testString.charAt(-2)) // 