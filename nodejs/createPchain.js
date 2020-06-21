const fs = require('fs');
const readFile = (path) => {
    return new Promise((resolve, reject) => {
        fs.readFile(path, 'utf8', (err, content) => {
            if ((err)) {
                reject(err);
            }
            else {
                resolve(content);
            }
        })
    })
}
let fileContent = " ";
console.time("answer time");
readFile('../files/file1.txt')
    .then(function (data) {
        fileContent = fileContent + data;
        return readFile('../files/file2.txt');

    })
    .then(function (data) {
        fileContent = fileContent + data;
        return readFile('../files/file3.txt');
    })
    .then(function (data) {
        fileContent = fileContent + data;
        return readFile('../files/file4.txt');
    })
    .then(function (data) {
        fileContent = fileContent + data;
        return readFile('../files/file5.txt');
    })
    .then(function (data) {
        fileContent = fileContent + data;
        console.timeEnd("answer time");
        // console.log(fileContent);
        fs.writeFile('createfile.txt', fileContent, function (err) {
            if (err) {
                console.log(err);
            }
            else {
                console.log(fileContent);
            }
        })
    })
    .catch(function (err) {
        console.log(err);
    })