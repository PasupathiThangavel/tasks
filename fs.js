'use strict';
const fs = require('fs');
const fileName = '../files/file1.txt';
const read = fs.readFile(fileName, 'utf8', (err, content) => {
    if (err) {
        console.log(err);
        throw err;
    } else {
        console.log('output is:' + content);
    }

});
const str = "pasupathi";

const write = fs.writeFile('create.txt', str, 'utf8', (err) => {
    if (err) {
        console.log(err);
        throw err;
    } else {
        console.log("saved :" + str);
    }
})

