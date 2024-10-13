
// Special characters (need to be escaped with \):
//  - .: Any character except newline.
//  - \d: Any digit (0-9).
//  - \D: Any non-digit.
//  - \w: Any word character (alphanumeric + underscore).
//  - \W: Any non-word character.
//  - \s: Any whitespace character.
//  - \S: Any non-whitespace character.
//  - \b: Word boundary.
//  - \B: Non-word boundary.
//  - ^: Start of a string.
//  - $: End of a string.

console.log(/ahmed/gi.test("This is faraz and ayaz and AHMED Faraz")) // true
console.log(/ahmed/.test("This is ahmed faraz and ahmed ayaz and AHMED Faraz")) // true

console.log("This is ahmed faraz and ahmed ayaz and AHMED Faraz".match(/ahmed/)) // [ 'ahmed', index: 8, input: 'This is ahmed faraz and ahmed ayaz and AHMED Faraz', groups: undefined ]
console.log("This is ahmed faraz and ahmed ayaz and AHMED Faraz".match(/ahmed/g)) // [ 'ahmed', 'ahmed' ]
console.log("This is ahmed faraz and ahmed ayaz and AHMED Faraz".match(/ahmed/gi)) // [ 'ahmed', 'ahmed', 'AHMED' ]

console.log(Array.from("This is ahmed faraz and ahmed ayaz and AHMED Faraz".matchAll(/ahmed/g)))
// [
//     [ 'ahmed', index: 8, input: 'This is ahmed faraz and ahmed ayaz and AHMED Faraz', groups: undefined ],
//     [ 'ahmed', index: 24, input: 'This is ahmed faraz and ahmed ayaz and AHMED Faraz', groups: undefined ]
// ]

console.log("This is ahmed faraz and ahmed ayaz and AHMED Faraz".replace(/ahmed/g, "UPDATED")) // This is UPDATED faraz and UPDATED ayaz and AHMED Faraz
console.log("This is ahmed faraz and ahmed ayaz and AHMED Faraz".replaceAll(/ahmed/g, "UPDATED")) // This is UPDATED faraz and UPDATED ayaz and AHMED Faraz
console.log("This is ahmed faraz and ahmed ayaz and AHMED Faraz".replaceAll(/ahmed/gi, "UPDATED")) // This is UPDATED faraz and UPDATED ayaz and UPDATED Faraz

console.log("this       is       ahmed".match(/^this/g)) // [ 'this' ]
console.log("this       is       ahmed".match(/^ahmed/g)) // null
console.log("this       is       ahmed".match(/this$/g)) // null
console.log("this       is       ahmed".match(/ahmed$/g)) // [ 'ahmed' ]

console.log("this is ahmed".match(/\w+/g)) // [ 'this', 'is', 'ahmed' ]
console.log("this       is       ahmed".match(/\w+/g)) // [ 'this', 'is', 'ahmed' ]

console.log("We have 1 and 2 and 3 and many more numbers like 42 also, also 1000, also 23453234.".match(/[0-9]/g)) // [ '1', '2', '3', '4', '2', '1', '0', '0', '0', '2', '3', '4', '5', '3', '2', '3', '4' ]
console.log("We have 1 and 2 and 3 and many more numbers like 42 also, also 1000, also 23453234.".match(/\d/g)) // [ '1', '2', '3', '4', '2', '1', '0', '0', '0', '2', '3', '4', '5', '3', '2', '3', '4' ]
console.log("We have 1 and 2 and 3 and many more numbers like 42 also, also 1000, also 23453234.".match(/[0-9]+/g)) // [ '1', '2', '3', '42', '1000', '23453234' ]
console.log("We have 1 and 2 and 3 and many more numbers like 42 also, also 1000, also 23453234.".match(/\d+/g)) // [ '1', '2', '3', '42', '1000', '23453234' ]
console.log("We have 1 and 2 and 3 and many more numbers like 42 also, also 1000, also 23453234.".match(/\d+/g).map(Number)) // [ 1, 2, 3, 42, 1000, 23453234 ]
console.log("We have 1 and 2 and 3 and many more numbers like 42 also, also 1000, also 23453234.".match(/\d+/g).map(Number).map(String)) // [ '1', '2', '3', '42', '1000', '23453234' ]

console.log("qUbnUipM12Njud345fisa68asmd28NMasoRTYUI2") // qUbnUipM12Njud345fisa68asmd28NMasoRTYUI2
console.log("qUbnUipM12Njud345fisa68asmd28NMasoRTYUI2".match(/[a-z]/g)) // [ 'q', 'b', 'n', 'i', 'p', 'j', 'u', 'd', 'f', 'i', 's', 'a', 'a', 's', 'm', 'd', 'a', 's', 'o' ]
console.log("qUbnUipM12Njud345fisa68asmd28NMasoRTYUI2".match(/[A-Z]/g)) // [ 'U', 'U', 'M', 'N', 'N', 'M', 'R', 'T', 'Y', 'U', 'I' ]
console.log("qUbnUipM12Njud345fisa68asmd28NMasoRTYUI2".match(/[a-zA-Z]/g)) // [ 'q', 'U', 'b', 'n', 'U', 'i', 'p', 'M', 'N', 'j', 'u', 'd', 'f', 'i', 's', 'a', 'a', 's', 'm', 'd', 'N', 'M', 'a', 's', 'o', 'R', 'T', 'Y', 'U', 'I' ]
console.log("qUbnUipM12Njud345fisa68asmd28NMasoRTYUI2".match(/\D/g)) // [ 'q', 'U', 'b', 'n', 'U', 'i', 'p', 'M', 'N', 'j', 'u', 'd', 'f', 'i', 's', 'a', 'a', 's', 'm', 'd', 'N', 'M', 'a', 's', 'o', 'R', 'T', 'Y', 'U', 'I' ]

console.log("qUbnUipM12Njud345fisa68asmd28NMasoRTYUI2".match(/\d/g)) // [ '1', '2', '3', '4', '5', '6', '8', '2', '8', '2' ]
console.log("qUbnUipM12Njud345fisa68asmd28NMasoRTYUI2".match(/\d+/g)) // [ '12', '345', '68', '28', '2' ]
console.log("qUbnUipM12Njud345fisa68asmd28NMasoRTYUI2".match(/\d+/g)) // [ '12', '345', '68', '28', '2' ]
console.log("qUbnUipM12Njud345fisa68asmd28NMasoRTYUI2".match(/\D+/g)) // [ 'qUbnUipM', 'Njud', 'fisa', 'asmd', 'NMasoRTYUI' ]
const allNumbers = "qUbnUipM12Njud345fisa68asmd28NMasoRTYUI2".match(/\d+/g);
console.log("qUbnUipM12Njud345fisa68asmd28NMasoRTYUI2")                                                 // qUbnUipM12Njud345fisa68asmd28NMasoRTYUI2
console.log("qUbnUipM12Njud345fisa68asmd28NMasoRTYUI2".replaceAll(/\d+/g, () => allNumbers.pop()))      // qUbnUipM2Njud28fisa68asmd345NMasoRTYUI12

console.log(/test/.test("this is test"));               // true
console.log(/Test/.test("this is test"));               // false
console.log(/test/.test("this is testing"));            // true
console.log(/test/.test("this is Greattesting"));       // true
console.log(/\btest/.test("this is testing"));          // true
console.log(/test\b/.test("this is Greattest"));        // true
console.log(/\btest\b/.test("this is Greattesting"));   // false
