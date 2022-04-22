const roteador = require("express").Router();


const textos = [{
    título: "",
    texto: ""
}]

roteador.get("/", (req, res) => {
    res.status(200)
    res.send(textos)
} )

roteador.post("/", (req, res) => {
    const novoTexto = req.body
    textos.push(novoTexto)
    res.status(201).send(novoTexto)
    console.log("esse é o post" + novoTexto)
    
    
} )

module.exports = roteador;