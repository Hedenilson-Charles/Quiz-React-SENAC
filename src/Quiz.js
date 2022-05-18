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
            texto: "6 - Em que parte do corpo se encontra a epiglote?",
            alternativas: ["Estômago","Cabeça","Mãos","Boca"],
            correta:0,

        },
        {
            imagem:"https://i.pinimg.com/236x/fa/53/4e/fa534eb8c3e0cec185c37d1bd4d6ebd8.jpg",
            texto: "7 - A quantos graus Celsius a água precisa estar para começar a ferver?",
            alternativas: ["0°","100°","30°","11°"],
            correta:0,

        },
        {
            imagem:"https://thumbs.gfycat.com/PhonyRichHorsefly-mobile.jpg",
            texto: "8 - Quantos noves tem de 0 a 100?",
            alternativas: ["x"],
            correta:0,

        },
        {
            imagem:"https://s1.static.brasilescola.uol.com.br/img/2018/03/catedral-de-sao-basilio.jpg",
            texto: "9 - Qual é a capital da Rússia?",
            alternativas: ["x"],
            correta:0,

        },
        {
            imagem:"https://imageproxy.ifunny.co/crop:x-20,resize:640x,quality:90x75/images/0bdc40f8a0c0c002f0d5309737803ed26d5e451cca52171843c7d81872a4c3bf_1.jpg",
            texto: "10 - Em que estado brasileiro aconteceu a guerra de canudos?",
            alternativas: ["x"],
            correta:0,

        },
        {
            imagem:"https://statig0.akamaized.net/bancodeimagens/cu/fz/2f/cufz2f859fwnmu3m28e09xouc.jpg",
            texto: "11 - Qual das alternativas contém apenas vacinas contra a covid-19 ?",
            alternativas: ["x"],
            correta:0,

        },
        {
            imagem: "https://aws1.discourse-cdn.com/nubank/original/3X/4/7/47919cb5977ce20f31e5640ffafb7754583cdb42.jpeg",
            texto: "12 - O que é Pix?",
            alternativas: ["x"],
            correta:0,

        },
        {
            imagem:"",
            texto: "13 - Qual das alternativas contém apenas invenções criadas",
            alternativas: ["x"],
            correta:0,

        },
        {
            imagem:"",
            texto: "14 - A condensação é a transição entre quais estados da materia?",
            alternativas: ["x"],
            correta:0,

        },
        {
            imagem:"",
            texto: "15 - O Dia Internacional das Mulheres é comemorado em qual mês?",
            alternativas: ["x"],
            correta:0,

        },

    ];


    
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