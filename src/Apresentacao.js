import { useState } from "react";
import Quiz from "./Quiz";

const Apresentacao = ( props ) => {

    const alteraTela = props.alteraTela;


    const [pontosIniciais, resetaPontos] = useState(0);




    return ( 
    <div>

        <h1>Bem-vindo ao quiz</h1>
        <p>Começar?</p>
        <button onClick={ ()=> alteraTela( <Quiz alteraTela={alteraTela}/>)<resetaPontos(pontosIniciais = 0)}>Começar</button>

    </div> 
    );
}
 
export default Apresentacao;