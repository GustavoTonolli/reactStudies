import React from 'react';

export default function Dados(props) {
    return (
        <section>
            <p>Nome : {props.nome}</p>
            <p>Curso : {props.curso}</p>
            <p>Profissao : {props.profissao}</p>
        </section>
    )
}