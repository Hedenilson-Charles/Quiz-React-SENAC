

const Perguntas = ( props ) => {


    require('./Perguntas.css');

    const perguntas = [
        {
            imagem: "https://blog.cobasi.com.br/wp-content/uploads/2018/11/gato-felicidade-lingua.jpg",
            texto:"1 - No mito português quantas vidas tem um gato?",
            alternativaA:"5 vidas",
            alternativaB:"7 vidas",
            alternativaC:"9 vidas",
            alternativaD:"2 vidas",
            correta:"",

        },
        {
            imagem: "https://drauziovarella.uol.com.br/wp-content/uploads/2012/01/trypanossoma-cruzi-e1555101468731-1000x562.jpg",
            texto:"2 - Qual bicho transmite a doença chagas?",
            alternativaA:"Barata",
            alternativaB:"Abelha",
            alternativaC:"Pulga",
            alternativaD:"Barbeiro",
            correta:"",

        },
        {
            imagem: "https://fmbalneario.com.br/wp-content/uploads/2022/01/Cachorra-com-acessorios-de-verao-em-praia-de-Florianopolis-vira.jpeg",
            texto:"3 - Qual é o coletivo de cães?",
            alternativaA:"Matilha",
            alternativaB:"Rebanho",
            alternativaC:"Alcateia",
            alternativaD:"Manada",
            correta:"",

        },
        {
            imagem: "https://claudia.abril.com.br/wp-content/uploads/2020/01/carmen-miranda-biografia-1.jpg",
            texto:"4 - Em que país nasceu Carmem Miranda?",
            alternativaA:"Itália",
            alternativaB:"Espanha",
            alternativaC:"Portugal",
            alternativaD:"Brasil",
            correta:"",

        },
        {
            imagem: "https://classic.exame.com/wp-content/uploads/2017/06/untitled-12.jpg?quality=70&strip=info&w=1024",
            texto:"5 -  Qual a ordem de sucessão dos presidentes brasileiros?",
            alternativaA:"Dilma Rousseff, Lula, Bolsonaro",
            alternativaB:"Fernando Henrique, Itamar Franco, Lula",
            alternativaC:"Dilma Rousseff, Michel Temer, Bolsonaro",
            alternativaD:"Itamar Franco, Collor, Lula -Collor, Lula, Dilma Rousseff",
            correta:"",

        },
        {
            imagem: "https://tribunapr.uol.com.br/wp-content/uploads/2020/03/03105249/nazare-confusa-970x550.jpg",
            texto:"6 - Em que parte do corpo se encontra a epiglote?",
            alternativaA:"Estômago",
            alternativaB:"Cabeça",
            alternativaC:"Mãos",
            alternativaD:"Boca",
            correta:"",

        },
        {
            imagem: "https://i.pinimg.com/236x/fa/53/4e/fa534eb8c3e0cec185c37d1bd4d6ebd8.jpg",
            texto:"7 - A quantos graus Celsius a água precisa estar para começar a ferver?",
            alternativaA:"0°",
            alternativaB:"100°",
            alternativaC:"30°",
            alternativaD:"11°",
            correta:"",

        },
        {
            imagem: "https://thumbs.gfycat.com/PhonyRichHorsefly-mobile.jpg",
            texto:"8 - Quantos noves tem de 0 a 100?",
            alternativaA:"10",
            alternativaB:"11",
            alternativaC:"20",
            alternativaD:"21",
            correta:"",

        },
        {
            imagem: "https://s1.static.brasilescola.uol.com.br/img/2018/03/catedral-de-sao-basilio.jpg",
            texto:"9 - Qual é a capital da Rússia?",
            alternativaA:"São Petersburgo",
            alternativaB:"Sóchi",
            alternativaC:"Moscou",
            alternativaD:"Cazã",
            correta:"",

        },{
            imagem: "https://imageproxy.ifunny.co/crop:x-20,resize:640x,quality:90x75/images/0bdc40f8a0c0c002f0d5309737803ed26d5e451cca52171843c7d81872a4c3bf_1.jpg",
            texto:"10 - Em que estado brasileiro aconteceu a guerra de canudos?",
            alternativaA:"Sergipe",
            alternativaB:"Minas Gerais",
            alternativaC:"Bahia",
            alternativaD:"São Paulo",
            correta:"",

        },{
            imagem: "https://statig0.akamaized.net/bancodeimagens/cu/fz/2f/cufz2f859fwnmu3m28e09xouc.jpg",
            texto:"11 - Qual das alternativas contém apenas vacinas contra a covid-19? ",
            alternativaA:"VIP/VOP e AstraZeneca ",
            alternativaB:"CoronaVac e AstraZeneca",
            alternativaC:" Rotavírus e CoronaVac",
            alternativaD:"Pentavalente (DTPa) e Sputnik V",
            correta:"",

        },{
            imagem: "https://aws1.discourse-cdn.com/nubank/original/3X/4/7/47919cb5977ce20f31e5640ffafb7754583cdb42.jpeg",
            texto:"12 - O que é Pix?",
            alternativaA:"Meio de pagamento instantâneo criado pelo Banco Central do Brasil",
            alternativaB:"Plano de investimento de baixo risco do Banco do Brasil",
            alternativaC:"Forma de pagamento online",
            alternativaD:"Produtos de investimento financeiro criados pelo Banco Central do Brasil",
            correta:"",

        },{
            imagem: "https://i.pinimg.com/236x/0c/7f/90/0c7f90b3466785f3618ca3c7a4b6af23.jpg",
            texto:"13 - Qual das alternativas contém apenas invenções criadas no Brasil?",
            alternativaA:"Urna eletrônica, soro antiofídico e chuveiro elétrico",
            alternativaB:"Lâmpada elétrica, chuveiro elétrico e internet -Telefone, internet e urna eletrónica",
            alternativaC:"Facebook, automóvel e paraquedas",
            alternativaD:"Urna eletrônica, soro antiofídico e paraquedas.",
            correta:"",

        },{
            imagem: "https://www.vazamentos.info/wp-content/uploads/2019/06/Como-acabar-com-a-condensacao.jpg",
            texto:"14 - A condensação é a transição entre quais estados da matéria?",
            alternativaA:"",
            alternativaB:"",
            alternativaC:"",
            alternativaD:"",
            correta:"",

        },{
            imagem: "https://www.defensoria.rs.def.br/upload/recortes/202003/05101833_66361_GD.png",
            texto:"15 -  O Dia Internacional das Mulheres é comemorado em qual mês?",
            alternativaA:"março",
            alternativaB:"abril",
            alternativaC:"outubro",
            alternativaD:"maio",
            correta:"",

        },
    ];



    return  (

        <div className="ContainerPerguntas">

            <div className="BlocoImagemTexto">
                
                <br/>
                <a>{perguntas[6].texto}</a>
                <br/>
                <img src={perguntas[6].imagem}/>
            </div>
            <div className="BlocoRespostasBotoes">
                
                <ul>
                    <li>{perguntas[6].alternativaA}</li>
                    <li>{perguntas[6].alternativaB}</li>
                    <li>{perguntas[6].alternativaC}</li>
                    <li>{perguntas[6 ].alternativaD}</li>
                </ul>


            </div>

        </div>

    );
}

export default Perguntas;