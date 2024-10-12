const fs = require('fs');

try {
  const data = fs.readFileSync('./input.txt', 'utf8');
  console.log(data);
  console.log(data.split("\r\n"))
} catch (err) {
  console.error(err);
}

// Output:
// Ahmed Faraz
// AWS
// JavaScript
// [ 'Ahmed Faraz', 'AWS', 'JavaScript' ]