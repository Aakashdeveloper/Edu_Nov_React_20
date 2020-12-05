const express = require('express');
const path = require('path');
const port = process.env.PORT ||5600;
const app = express();
const fs = require('fs');
const cors = require('cors');

app.use(cors())

app.use(express.static(path.join(__dirname,'build')));

app.get('/',(req,res) => {
    res.sendFile(path.join(__dirname,'build/index.html'))
});

app.get('/news',(req,res) =>{
    fs.readFile('db.json','utf-8',(err,data)=>{
        if(err) throw err;
        res.send(data)
    })
});

app.listen(port,(err) => {
    if(err) throw err;
    console.log(`Server is running on port ${port}`);
});