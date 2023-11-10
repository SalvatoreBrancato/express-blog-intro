const post = require("../db/post.json");

function index(req, res){
    res.send('prova controller')
}

//esportiamo le funzioni per utilizzare in un altro compoennte
module.exports = {
    index
  }