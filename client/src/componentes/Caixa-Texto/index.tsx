import React, { useState } from "react";
import Botao from "../Botao/index";
import { ITextos } from "../../types/textos";



class CaixaTexto extends React.Component  <{
   postarTextos(novoTexto): void
    setTextos: React.Dispatch<React.SetStateAction<ITextos[]>>}>{
     
    state = {
        título: "",
        texto: ""
    }

    publicarTexto(evento: React.FormEvent<HTMLFormElement>) {
        evento.preventDefault();
        this.props.setTextos(textosAntigos => [...textosAntigos, {...this.state}])
        this.props.postarTextos(this.state)
        console.log("state: ", this.state)
    }

    // realizarPost(evento: React.FormEvent<HTMLFormElement>) {
    //     evento.preventDefault();
    //     this.props.postarTextos()
    // }
    

    render() {
        return (
            <form onSubmit={this.publicarTexto.bind(this)}>
                <div>
                    <label htmlFor="título">
                        Título
                    </label>
                    <input
                        type="text"
                        name="título"
                        id="título"
                        value={this.state.título}
                        onChange={evento => this.setState({...this.state, título: evento.target.value})}
                        placeholder="Digite o título do texto aqui"
                        required
                    />
                </div>
        
                <div>
                    <label htmlFor="caixa-texto">
                        Seu texto
                    </label>
                    <textarea
                    placeholder="Digite seu texto aqui"
                    value={this.state.texto}
                    onChange={evento => this.setState({...this.state, texto: evento.target.value})}
                    name="caixa-texto"
                    id="caixa-texto"
                    required
                    >
        
                    </textarea>
                    
                </div>
                <div>
                    <button>
                            Publicar
                    </button>
        
                    
                </div>    
            </form>
            
        
           )
        }
    }




export default CaixaTexto;