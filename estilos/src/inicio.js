import React from "react";
import Menu from "./Menu";
import Perguntas from "./Perguntas";
import Rodape from "./Rodape";

const Inicio = () => {

    const [telaPergunta , alteraPergunta] = React.useState(0);
  console.log(telaPergunta);


    return(
        <div>
            <Menu/>

            <div className="container">


            </div>


        </div>
    );


}