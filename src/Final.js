import Apresentacao from "./Apresentacao";

const Final = ( props) => {

    const alteraTela = props.alteraTela;
    const pontos = props.pontos;

    require('./Final.css');

    
    return ( 
        <div className="Final">
            <h1>Parabéns!</h1>
            <p>Você terminou o Quiz</p>
            <p>Você marcou {pontos} pontos!</p>

            <div className="button">
                <button onClick={()=> alteraTela(<Apresentacao alteraTela={alteraTela}/>)}>Recomeçar</button>
            </div>

        </div>
     );
}
 
export default Final;