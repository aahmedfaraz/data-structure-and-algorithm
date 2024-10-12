process.stdin.resume();  // Start reading input
process.stdin.setEncoding('utf8');  // Set encoding for the input

console.log('Enter your input: ');

process.stdin.on('data', (data) => {
  console.log(`You entered: ${data.trim()}`);
  process.stdin.pause();  // Stop reading input
});
