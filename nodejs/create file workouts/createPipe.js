const fs = require('fs');
const readStream1 = fs.createReadStream('../files/file1.txt', 'utf8');
const readStream2 = fs.createReadStream('../files/file2.txt', 'utf8');
const readStream3 = fs.createReadStream('../files/file3.txt', 'utf8');
const readStream4 = fs.createReadStream('../files/file4.txt', 'utf8');
const readStream5 = fs.createReadStream('../files/file5.txt', 'utf8');
const WriteStream = fs.createWriteStream('./createfile.txt');
readStream1.pipe(WriteStream);
readStream2.pipe(WriteStream);
readStream3.pipe(WriteStream);
readStream4.pipe(WriteStream);
readStream5.pipe(WriteStream);