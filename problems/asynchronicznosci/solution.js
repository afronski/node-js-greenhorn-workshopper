"use strict";

var fs = require("fs"),
    os = require("os"),

    file = process.argv[2];

fs.readFile(file, function (err, contents) {
  var lines = contents.toString().split(os.EOL).length - 1;

  console.log(lines);
});