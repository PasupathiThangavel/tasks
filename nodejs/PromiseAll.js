const fs = require('fs');
const readFile = function (path) {
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

const r1 = readFile('../files/file1.txt');
const r2 = readFile('../files/file2.txt');
const r3 = readFile('../files/file3.txt');
const r4 = readFile('../files/file4.txt');
const r5 = readFile('../files/file5.txt');
console.time('answertime');
Promise.all([r1, r2, r3, r4, r5]).then((data) => {
    fs.writeFile('createfile.txt', data.join(' '), function (err) {
        if (err) {
            console.log(err);
        }
        else {
            console.log(data.join(' '));
        }
    })
})

console.timeEnd('answertime');

