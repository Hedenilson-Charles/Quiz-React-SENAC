import React from "react";

import Quiz from "./Quiz";

const TelaCorreta = ( props ) => {

    const etapa = props.etapa;


    console.log(etapa);


    return(
    
    <div>

        <h1> Este é um teste</h1>
        <button onClick={<Quiz etapa = {etapa}/>} >Voltar pra la</button>


    </div>
    );
}

export default TelaCorreta;