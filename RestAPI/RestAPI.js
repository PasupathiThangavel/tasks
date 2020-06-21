const express = require('express');
const app = express();
app.get('/', (req, res) => {
    res.send('hello world123cls');

});

app.get('/example', (req, res) => {
    res.send('hitting example router');
});

// app.get('/example/:name/:age',(req,res)=>{
//    console.log(req.params);

//    res.send(req.params.name + ":" +req.params.age);
//     });


app.listen(5000);