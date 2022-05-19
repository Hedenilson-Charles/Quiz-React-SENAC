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


        const respostaCorreta = perguntas[etapa].correta;
        const ultima = (respostaCorreta == i);
        if (respostaCorreta == i ) {
            alteraPontos(pontos + 1);    
        }
        console.log(pontos);



        if ( etapa + 1 < perguntas.length ) {
            alteraEtapa( etapa + 1);
        } else {
            alteraTela(<Final alteraTela={alteraTela} ultima={ultima} pontos = {pontos}/>);
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
            texto:"2 - Qual bicho transmite a doença de chagas?",
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
            correta:2,
        },
        {
            imagem: "https://classic.exame.com/wp-content/uploads/2017/06/untitled-12.jpg?quality=70&strip=info&w=1024",
            texto:"5 - Qual a ordem de sucessão dos presidentes brasileiros?",
            alternativas:["Dilma Rousseff, Lula, Bolsonaro","Fernando Henrique, Itamar Franco, Lula","Dilma Rousseff, Michel Temer, Bolsonaro","Itamar Franco, Collor, Lula, Collor, Lula, Dilma Rousseff"],
            correta:2,
        },
        {
            imagem:"https://tribunapr.uol.com.br/wp-content/uploads/2020/03/03105249/nazare-confusa-970x550.jpg",
            texto: "6 - Em que parte do corpo se encontra a epiglote?",
            alternativas: ["Estômago","Cabeça","Mãos","Boca"],
            correta:3,

        },
        {
            imagem:"https://i.pinimg.com/236x/fa/53/4e/fa534eb8c3e0cec185c37d1bd4d6ebd8.jpg",
            texto: "7 - A quantos graus Celsius a água precisa estar para começar a ferver?",
            alternativas: ["0°","100°","30°","11°"],
            correta:1,

        },
        {
            imagem:"https://thumbs.gfycat.com/PhonyRichHorsefly-mobile.jpg",
            texto: "8 - Quantos noves tem de 0 a 100?",
            alternativas: ["10","11","20","21"],
            correta:2,

        },
        {
            imagem:"https://s1.static.brasilescola.uol.com.br/img/2018/03/catedral-de-sao-basilio.jpg",
            texto: "9 - Qual é a capital da Rússia?",
            alternativas: ["São Petersburgo","Sóchi","Moscou","Cazã"],
            correta:2,

        },
        {
            imagem:"https://imageproxy.ifunny.co/crop:x-20,resize:640x,quality:90x75/images/0bdc40f8a0c0c002f0d5309737803ed26d5e451cca52171843c7d81872a4c3bf_1.jpg",
            texto: "10 - Em que estado brasileiro aconteceu a guerra de canudos?",
            alternativas: ["Sergipe","Minas Gerais","Bahia","São Paulo"],
            correta:2,

        },
        {
            imagem:"https://www.sc.gov.br/images/joomgallery/details/setoriais_6457/vacina_covid-19_20210126_1398272169.jpg",
            texto: "11 - Qual das alternativas contém apenas vacinas contra a covid-19 ?",
            alternativas: ["VIP/VOP e AstraZeneca","CoronacVac e AstraZenece","Rotavírus e CoronaVac","Pentavalente(DTPa) e Sputnik V"],
            correta:1,

        },
        {
            imagem: "https://aws1.discourse-cdn.com/nubank/original/3X/4/7/47919cb5977ce20f31e5640ffafb7754583cdb42.jpeg",
            texto: "12 - O que é Pix?",
            alternativaB:"Plano de investimento de baixo risco do Banco do Brasil",
            alternativas: ["Meio de pagamento instantâneo criado pelo Banco Central do Brasil","Plano de investimento de baixo risco do Banco do Brasil","Forma de pagamento online","Produtos de investimento financeiro criados pelo Banco Central"],
            correta:0,

        },
        {
            imagem: "https://i.pinimg.com/236x/0c/7f/90/0c7f90b3466785f3618ca3c7a4b6af23.jpg",
            texto: "13 - Qual das alternativas contém apenas invenções criadas no Brasil",
            alternativas: ["Urna eletrônica, soro antiofídico e chuveiro elétrico","lâmpada elétrica, chuveiro elétrico e internet-telefone e urna eletrónica","Facebook, automóvel e paraquedas","Urna eletrónica, soro antiofídico e paraquedas"],
            correta:0,

        },
        {
            imagem: "https://www.vazamentos.info/wp-content/uploads/2019/06/Como-acabar-com-a-condensacao.jpg",
            texto: "14 - A condensação é a transição entre quais estados da materia?",
            alternativas: ["Sólido para líquido","Gasoso para líquido","Líquido para sólido","Líquido para gás"],
            correta:1,

        },
        {
            imagem: "https://www.defensoria.rs.def.br/upload/recortes/202003/05101833_66361_GD.png",
            texto: "15 - O Dia Internacional das Mulheres é comemorado em qual mês?",
            alternativas: ["Março","Abril","Outubro","Maio"],
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