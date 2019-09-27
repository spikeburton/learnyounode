'use strict';

const fs = require('fs');
const path = require('path');

try {
  fs.readdir(process.argv[2], (err, files) => {
    if (err) {
      console.error(err);
      return;
    }

    if (!process.argv[3]) {
      console.error('ERROR: no filter provided');
      return;
    }

    const filtered = files.filter(file => {
      return `.${process.argv[3]}` === path.extname(file);
    });

    for (let i = 0; i < filtered.length; i++) {
      console.log(filtered[i]);
    }
  });
} catch (error) {
  console.error('ERROR: invalid number of arguments');
}
