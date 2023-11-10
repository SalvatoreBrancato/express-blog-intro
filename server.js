const express = require('express');
const dotenv = require("dotenv").config();

const app = express();
const port = process.env.PORT || 8080;

app.get('/', (req, res) =>{
    res.send('<h1>Benvenuto nel mio blog</h1>')
})

app.listen(port, ()=>{
    console.log(`http://localhost:${port}`)
})
