const post = require("../db/post.json");

function index(req, res){
    res.send('<h1>Benvenuto nel mio blog</h1>')
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
        },
        default: ()=>{
            res.status(404).send('Richiesta formato non previto')
        }
    })  
}

//esportiamo le funzioni per utilizzare in un altro compoennte
module.exports = {
    index,
    iMieiPost
  }