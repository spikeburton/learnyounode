const fs = require('fs');

try {
  const buffer = fs.readFileSync(process.argv[2]);
  const lines = buffer.toString().split('\n');
  console.log(lines.length - 1);
} catch (error) {
  console.log('ERROR: provide a file name!');
}
