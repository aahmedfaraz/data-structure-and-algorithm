const fss = require('fs');

fss.readFile('./input.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);
  console.log(data.split("\r\n"))
});

// Output:
// Ahmed Faraz
// AWS
// JavaScript
// [ 'Ahmed Faraz', 'AWS', 'JavaScript' ]