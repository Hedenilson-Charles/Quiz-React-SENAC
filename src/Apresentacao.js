import { useState } from "react";
import Quiz from "./Quiz";

const Apresentacao = ( props ) => {

    const alteraTela = props.alteraTela;


    const [pontosIniciais, resetaPontos] = useState(0);


    require('./Apresentacao.css');

    return ( 
    <div className="Apresentacao">

        <h1> Bem-vindo ao quiz ✍🏽 </h1>
        <p>Aqui você colocará á prova seus conhecimentos gerais</p>
        <div className="Button">
             <button onClick={ ()=> alteraTela( <Quiz alteraTela={alteraTela}/>)<resetaPontos(pontosIniciais = 0)}>Começar</button>
        </div>

    </div> 
    );
}
 
export default Apresentacao;