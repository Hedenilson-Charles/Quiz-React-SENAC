import React from 'react';
import Quiz from './Quiz';

const Menu = ( props ) =>{
    const pontos = props.pontos;

    require('./Menu.css');

    return(

        <div className="Menu"> 
        <img src='https://i.imgur.com/RTVb6EB.png'/>
        </div>

    );

}

export default Menu;