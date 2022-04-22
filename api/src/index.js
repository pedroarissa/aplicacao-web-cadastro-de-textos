const bodyParser = require("body-parser");
const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

const roteador = require("./rotas/textos");
app.use("/api/textos", roteador)

app.listen(8000, (erro) => {
    if(erro) throw Error;
    console.log("Api rodando")
})

