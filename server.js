const express = require('express');
const dotenv = require("dotenv").config();
const postController = require("./controllers/postController");
const app = express();
const port = process.env.PORT || 8080;

app.get('/', postController.index);

app.listen(port, ()=>{
    console.log(`http://localhost:${port}`)
})

