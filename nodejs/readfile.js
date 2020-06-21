const fs = require('fs');

function name(fileName) {
    fs.readFile(fileName, 'utf8', (err, file) => {
        if (err)
            console.log(err);
        console.log(file);
    });
}
name('../files/file1.txt');
