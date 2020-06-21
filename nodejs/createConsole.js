const fs = require('fs');
const readFile = function (path) {
    return new Promise((resolve, reject) => {
        fs.readFile(path, 'utf8', (err, content) => {
            if (err) {
                reject(err);
            }
            else {
                resolve(content)
            }
        })
    })
}

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
                                        console.log(fileContent);

                                    })

                                    .catch(function (err) {
                                        console.log(err);
                                    })
                            })
                            .catch(function (err) {
                                console.log(err);
                            })
                    })

                    .catch(function (err) {
                        console.log(err);
                    })
            })
            .catch(function (err) {
                console.log(err);
            })
    })
    .catch(function (err) {
        console.log(err);
    })















// const fs = require('fs');
// const readFile = function (path) {
//     return new Promise((resolve, reject) => {
//         fs.readFile(path, 'utf-8', (err, content) => {
//             if (err) {
//                 reject(err);
//             } else {
//                 resolve(content);
//             }
//         });
//     });

// }

//  let fileContent=" ";
//   readFile('../files/file1.txt')
//       .then(function (data) {
//        fileContent=fileContent+data;

//              readFile('../files/file2.txt')








//})
//     .catch(function (err) {
//         console.log(err);
//     })

// const b = readFile('../files/file2.txt')
//     .then(function (data) {
//         console.log(data);
//     })
//     .catch(function (err) {
//         console.log(err);
//     })

// const d = readFile('../files/file3.txt')
//     .then(function (data) {
//         console.log(data);
//     })
//     .catch(function (err) {
//         console.log(err);
//     })

// const e = readFile('../files/file4.txt')
//     .then(function (data) {
//         console.log(data);
//     })
//     .catch(function (err) {
//         console.log(err);
//     })

// const f = readFile('../files/file5.txt')
//     .then(function (data) {
//         console.log(data);
//     })
//     .catch(function (err) {
//         console.log(err);
//     })

// console.log(a);
// console.log(b);
// console.log(d);
// console.log(e);
// console.log(f);