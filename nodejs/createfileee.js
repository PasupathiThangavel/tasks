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

};

let fileContent = " ";
readFile('../files/file1.txt')

    .then(function (data) {
        fileContent = fileContent + data;

        readFile('../files/file2.txt')

            .then(function (data) {
                fileContent = fileContent + data;
                readFile('../files/file3.txt')
                    .then(function (data) {
                        fileContent = fileContent + data;
                        readFile('../files/file4.txt')
                            .then(function (data) {
                                fileContent = fileContent + data;
                                readFile('../files/file5.txt')
                                    .then(function (data) {
                                        fileContent = fileContent + data;

                                        fs.writeFile('createfileee.txt', fileContent, function (err) {
                                            if (err) throw err;
                                            console.log(fileContent);
                                        });
                                    })
                                    .catch(function (err) {
                                        console.log(err)
                                    })
                            })
                            .catch(function (err) {
                                console.log(err)
                            })
                    })

                    .catch(function (err) {
                        console.log(err)
                    })
            })
            .catch(function (err) {
                console.log(err)
            })
    })
    .catch(function (err) {
        console.log(err)
    })








