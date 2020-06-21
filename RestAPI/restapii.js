const express = require('express')
const app = express()
const port = 3000
'use strict';
const fs = require('fs');
app.get('/product', (req, res) => {
    fs.readFile('product.json', (err, data) => {
        let product = JSON.parse(data);
        if (err) throw err;
        console.log(product);
        res.send(product);
    });
});

app.post('/product', (req, res) => {
    fs.readFile('product.json', (err, data) => {
        let product = JSON.parse(data);
        if (err) throw err;
        console.log(product);
        res.send(product);
    });
});
app.listen(port, () => console.log(`app listen ${port}`));