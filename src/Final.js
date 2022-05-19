import Apresentacao from "./Apresentacao";

const Final = ( props) => {

    const alteraTela = props.alteraTela;
    const ultima = props.ultima;
    const pontos = props.pontos + (ultima? 1:0);

    require('./Final.css');

    
    return ( 
        <div className="Final">
            <h1>Parabéns!</h1>
            <p>Você terminou o Quiz</p>
            <p>Você acertou {pontos}/15 perguntas!</p>

            <div className="button">
                <button onClick={()=> alteraTela(<Apresentacao alteraTela={alteraTela}/>)}>Recomeçar</button>
            </div>

        </div>
     );
}
 
export default Final;