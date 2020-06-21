const fs = require('fs');
fs.unlink('createfile.txt', (err) => {
    if (err) console.log(err);
    console.log('File deleted!');
});