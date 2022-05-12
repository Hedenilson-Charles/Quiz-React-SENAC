import React from 'react';
import Quiz from './Quiz';

const Menu = ( props ) =>{
    const pontos = props.pontos;

    require('./Menu.css');

    return(

        <div className="Menu"> 
        <p>logo</p>
        <p>Pontos : {pontos}</p>
        </div>

    );

}

export default Menu;