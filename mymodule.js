'use strict';

const fs = require('fs');
const path = require('path');

module.exports = function(dir, ext, cb) {
  fs.readdir(dir, (err, files) => {
    if (err) return cb(err);

    const data = files.filter(file => {
      return `.${ext}` === path.extname(file);
    });
    return cb(null, data);
  });
};
