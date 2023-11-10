const express = require('express');
const dotenv = require("dotenv").config();
const postController = require("./controllers/postController");
const app = express();
const port = process.env.PORT || 8080;

//file statici (immagini nella cartella public)
app.use(express.static('public'));

app.get('/', postController.index);
app.get('/post', postController.iMieiPost);

app.listen(port, ()=>{
    console.log(`http://localhost:${port}`)
})

