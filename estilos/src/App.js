import React from 'react';


import Menu from './Menu';
import Perguntas from './Perguntas';
import Rodape from './Rodape';


const App = () => {

  require('./App.css');

  

  return(

    <div> 
      <Menu/>
      <Perguntas/>
      <Rodape/>
    </div>

  );
}

export default App;
