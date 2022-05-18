import React from "react";
import Quiz from "./Quiz";

const TelaCorreta = ( props ) => {

    const etapa = props.etapa;
    const alteraTela = props.alteraTela;


    console.log(etapa);


    return(
    
    <div>

        <h1> Este é um teste</h1>
        <h1>{ localStorage.getItem("etapa") }</h1>
        <button onClick={()=> alteraTela(<Quiz alteraTela={alteraTela}/>)}>Voltar pra la</button>


    </div>
    );
}

export default TelaCorreta;