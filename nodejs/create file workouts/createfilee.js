const fs = require('fs');
//const { resolve } = require('path');
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

};


let fileContent = " ";
readFile('../files/file1.txt')
    .then(function (data) {
        fileContent = fileContent + data;
        fs.writeFile('createfilee.txt', fileContent, function (err) {
            if (err) throw err;
            console.log(fileContent);
        });
    })
readFile('../files/file2.txt')

    .catch(function (err) {
        console.log(err);
    })
readFile('../files/file2.txt')
    .then(function (data) {
        fileContent = fileContent + data;
        readFile('../files/file3.txt')
    })
    .catch(function (err) {
        console.log(err);
    })
readFile('../files/file3.txt')
    .then(function (data) {
        fileContent = fileContent + data;
        readFile('../files/file4.txt')
    })
    .catch(function (err) {
        console.log(err);
    })

readFile('../files/file4.txt')
    .then(function (data) {
        fileContent = fileContent + data;
        readFile('../files/file5.txt')
    })

    .catch(function (err) {
        console.log(err);
    })

readFile('../files/file5.txt')
    .then(function (data) {
        fileContent = fileContent + data;
        fs.writeFile('createfilee.txt', fileContent, function (err) {
            if (err) throw err;
            console.log(fileContent);
        });
    })
    .catch(function (err) {
        console.log(err);
    })


