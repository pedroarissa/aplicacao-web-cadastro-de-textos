import React from "react";
import CaixaTexto from "../Caixa-Texto";
import { ITextos } from "../../types/textos";
import Item from "./Item";


export default function Lista({textos}: {textos: ITextos[]}) {
    return (
        <aside>
            <h2>Textos Publicados</h2>
            <ul>
            {textos.map((item, index) => (
                    <Item
                        key={index} 
                        {...item}
                    />
                ))}
            </ul>
        </aside>
    )
}

