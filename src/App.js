import React, {useState} from 'react';

import Apresentacao from './Apresentacao';
import Menu from './Menu';
import Rodape from './Rodape';

const App = () => {

    require('./App.css');

    const [ tela, alteraTela ] = useState( null );

    if(tela == null) {
        alteraTela(<Apresentacao alteraTela={alteraTela}/>);
    }

    

    return(

        <div> 
            <Menu/>


            { tela }



            <Rodape/>
        </div>

    );
}

export default App;
