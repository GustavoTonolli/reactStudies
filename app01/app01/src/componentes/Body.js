import React from "react";

const nome = 'Gustavo';
const curso = () => {
    return ('ReactJS');
}

export default function Body() {
    return (

        <div>
            <p>{'Nome: ' + nome}</p> {/* utilizando codigo JS junto com HTML */}
            <p>{'Curso: ' + curso()}</p> {/* Retornando string com funcao */}
        </div>

    )
}