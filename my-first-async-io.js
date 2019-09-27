'use strict';

const fs = require('fs');

try {
  fs.readFile(process.argv[2], (err, data) => {
    if (err) {
      console.log(err);
      return;
    }

    const lines = data.toString().split('\n');
    console.log(lines.length - 1);
  });
} catch (error) {
  console.error('ERROR: no file name given');
}
