var fs = require('fs')
var path = require('path');

var directory = process.argv[2];//in array place 0,1 are default which are bin node path and script.js path thatbis why we have to take argument from 2 and so on.
var ext = '.' + process.argv[3];

fs.readdir(directory, function (err, files) {
    if (err) {
        return console.log(err);
    }

    files.forEach(function(file) {
        if (path.extname(file) === ext) {
            console.log(file);
        };
    });
});











