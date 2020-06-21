const fs = require('fs');
const { resolve } = require('path');
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
var file = file1 + file2 +
    file3 + file4 + file5;
var write1 = fs.writeFile('createfile6.txt', file1, function (err) {
    if (err) throw err;
    console.log('Saved!');
});

var write2 = fs.writeFile('createfile6.txt', file2, function (err) {
    if (err) throw err;
    console.log('Saved!');
});
var write3 = fs.writeFile('createfile6.txt', file3, function (err) {
    if (err) throw err;
    console.log('Saved!');
});
var write4 = fs.writeFile('createfile6.txt', file4, function (err) {
    if (err) throw err;
    console.log('Saved!');
});
var write5 = fs.writeFile('createfile6.txt', file5, function (err) {
    if (err) throw err;
    console.log('Saved!');
});
var write = write1 + write2 + write3 + write4 + write5;

file1.then(function (write1) {
    console.log(write1);
})
    .catch(function (err) {
        console.log(err);
    })

file2.then(function (write2) {
    console.log(write2);
})
    .catch(function (err) {
        console.log(err);
    })
file3.then(function (write3) {
    console.log(write3);
})
    .catch(function (err) {
        console.log(err);
    })
file4.then(function (write4) {
    console.log(write4);
})
    .catch(function (err) {
        console.log(err);
    })
file5.then(function (write5) {
    console.log(write5);
})
    .catch(function (err) {
        console.log(err);
    })

// //console.log(a);
// console.log(b);
// console.log(d);
// console.log(e);
// console.log(f);