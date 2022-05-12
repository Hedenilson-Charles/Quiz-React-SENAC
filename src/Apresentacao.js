import Quiz from "./Quiz";

const Apresentacao = ( props ) => {

    const alteraTela = props.alteraTela;




    return ( 
    <div>

        <h1>Bem-vindo ao quiz</h1>
        <p>Começar?</p>
        <button onClick={ ()=> alteraTela( <Quiz alteraTela={alteraTela}/>) }>Começar</button>

    </div> 
    );
}
 
export default Apresentacao;