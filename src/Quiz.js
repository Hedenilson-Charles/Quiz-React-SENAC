import React, { useState } from 'react';
import Final from './Final';
import TelaCorreta from './TelaCorreta';


const Quiz = (props) => {

    const alteraTela = props.alteraTela;


    require('./Quiz.css');


    //Função abaixo vai computar os pontos
    const [pontos , alteraPontos] = useState(0);


    // Funçao abaixo corre pelas perguntas
    const verificaResposta = ( i ) => {

        console.log(i);

        const respostaCorreta = perguntas[etapa].correta;
        if (respostaCorreta == i ) {
            alteraPontos(pontos + 1);    
        }
        console.log(pontos);



        if ( etapa + 1 < perguntas.length ) {
            alteraEtapa( etapa + 1);
        } else {
            alteraTela(<Final alteraTela={alteraTela} pontos = {pontos}/>);
        }

    }
    


    const [etapa , alteraEtapa] = useState( 0 );

    const perguntas = [
        {
            imagem: "https://blog.cobasi.com.br/wp-content/uploads/2018/11/gato-felicidade-lingua.jpg",
            texto:"1 - No mito português quantas vidas tem um gato?",
            alternativas:["5 vidas","7 vidas","9 vidas","2 vidas"],
            correta: 1,
        },
        {
            imagem: "https://drauziovarella.uol.com.br/wp-content/uploads/2012/01/trypanossoma-cruzi-e1555101468731-1000x562.jpg",
            texto:"2 - Qual bicho transmite a doença chagas?",
            alternativas:["Barata","Abelha","Pulga","Barbeiro"],
            correta: 3,
        },
        {
            imagem: "https://fmbalneario.com.br/wp-content/uploads/2022/01/Cachorra-com-acessorios-de-verao-em-praia-de-Florianopolis-vira.jpeg",
            texto:"3 - Qual é o coletivo de cães?",
            alternativas:["Matilha","Rebanho","Alcateia","Manada"],
            correta:0,
        },
        {
            imagem: "https://claudia.abril.com.br/wp-content/uploads/2020/01/carmen-miranda-biografia-1.jpg",
            texto:"4 - Em que país nasceu Carmem Miranda?",
            alternativas:["Itália","Espanha","Portugal","Brasil"],
            correta:0,
        },
        {
            imagem: "https://classic.exame.com/wp-content/uploads/2017/06/untitled-12.jpg?quality=70&strip=info&w=1024",
            texto:"5 - Qual a ordem de sucessão dos presidentes brasileiros?",
            alternativas:["Dilma Rousseff, Lula, Bolsonaro","Fernando Henrique, Itamar Franco, Lula","Dilma Rousseff, Michel Temer, Bolsonaro","Itamar Franco, Collor, Lula, Collor, Lula, Dilma Rousseff"],
            correta:0,
        },
        {
            imagem:"https://tribunapr.uol.com.br/wp-content/uploads/2020/03/03105249/nazare-confusa-970x550.jpg",
            texto: "",
            alternativas: "",
            correta:0,

        },
        {
            imagem:"",
            texto: "",
            alternativas: "",
            correta:0,

        },
        {
            imagem:"",
            texto: "",
            alternativas: "",
            correta:0,

        },
        {
            imagem:"",
            texto: "",
            alternativas: "",
            correta:0,

        },
        {
            imagem:"",
            texto: "",
            alternativas: "",
            correta:0,

        },
        {
            imagem:"",
            texto: "",
            alternativas: "",
            correta:0,

        },
        {
            imagem:"",
            texto: "",
            alternativas: "",
            correta:0,

        },
        {
            imagem:"",
            texto: "",
            alternativas: "",
            correta:0,

        },
        {
            imagem:"",
            texto: "",
            alternativas: "",
            correta:0,

        },
        {
            imagem:"",
            texto: "",
            alternativas: "",
            correta:0,

        },

    ];

    console.log(pontos);

    
    return  (

        <div className="ContainerPerguntas">


            <div className='BlocoImagemTexto'>
                <h2> {perguntas[etapa].texto} </h2>
                <img src={perguntas[etapa].imagem}/>
                
            </div>
            <div className='BlocoRespostasBotoes'>
                <ul>
                    {
                        perguntas[etapa].alternativas.map((a , i)=> {
                            return <li onClick={()=> verificaResposta(i) }>{a}</li>
                        })
                    }
                </ul>
            </div>


        </div>

    );
}

export default Quiz;