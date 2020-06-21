const fs = require('fs');
const readFile = function (path) {
    return new Promise((resolve, reject) => {
        fs.readFile(path, 'utf-8', (err, content) => {
            if (err) {
                reject(err);
            } else {
                resolve(content);
            }
        });
    });

}

var file1 = readFile('../files/file1.txt');
var file2 = readFile('../files/file2.txt');
var file3 = readFile('../files/file3.txt');
var file4 = readFile('../files/file4.txt');
var file5 = readFile('../files/file5.txt');
//var file = (readFile('../files/file1.txt'), readFile('../files/file2.txt'), readFile('../files/file3.txt'), readFile('../files/file4.txt'), readFile('../files/file5.txt'));

file1.then(function (file1) {
    fs.appendFile('createfile.txt', file1, function (err) {
        if (err) throw err;
        console.log('saved!');
    });

})
    .catch(function (err) {
        console.log(err);
    });

file2.then(function (file2) {
    fs.appendFile('createfile.txt', file2, function (err) {
        if (err) throw err;
        console.log('Saved!');
    });

})
    .catch(function (err) {
        console.log(err);
    });
file3.then(function (file3) {
    fs.appendFile('createfile.txt', file3, function (err) {
        if (err) throw err;
        console.log('Saved!');
    });

})
    .catch(function (err) {
        console.log(err);
    });
file4.then(function (file4) {
    fs.appendFile('createfile.txt', file4, function (err) {
        if (err) throw err;
        console.log('Saved!');
    });

})
    .catch(function (err) {
        console.log(err);
    });
file5.then(function (file5) {
    fs.appendFile('createfile.txt', file5, function (err) {
        if (err) throw err;
        console.log('Saved!');
    });

})
    .catch(function (err) {
        console.log(err);
    })
