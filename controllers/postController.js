const post = require("../db/post.json");

function index(req, res){
    res.send('prova controller')
}

function iMieiPost(req, res){
    res.format({
        "html": ()=>{
            let htmlPost = '<ul>'
            for(let elem of post){
                htmlPost+= `${elem.titolo}<li>${elem.contenuto}</li>`
            }
            htmlPost += '</ul>'
            res.type('html').send(htmlPost)        
        },
        "json": ()=>{
            //file json importato
            res.type("json").send(post)
        }
    })  
}

//esportiamo le funzioni per utilizzare in un altro compoennte
module.exports = {
    index,
    iMieiPost
  }