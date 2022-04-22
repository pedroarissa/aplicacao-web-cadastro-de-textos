import React from 'react';
import CaixaTexto from './componentes/Caixa-Texto';
import { useState, useEffect } from 'react';
import Lista from "./componentes/Lista"
import { ITextos } from './types/textos';
import conexaoApi from "./conexaoApi/conexaoApi";



function App() {
  const [textos, setTextos] = useState<ITextos[] | []>([]);
  useEffect(() => {
    mostrarTextos ()
}, [])
  return (
    <div className="App">
      <CaixaTexto postarTextos={postarTextos} setTextos={setTextos}/>
      <Lista textos={textos}/>
    </div>
  );

function mostrarTextos() {
  conexaoApi.get("/api/textos/")
            .then((res) => setTextos(res.data))
            .catch((error) => console.log("deu erro" + error))
}

function postarTextos(novoTexto) {
  conexaoApi.post("/api/textos/")
            .then((res) => {setTextos([...textos, res.data]); console.log(textos)})
            .catch((error) => console.log("deu erro no post" + error))
}
  

}



export default App;
