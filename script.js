const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "    Você está em uma floresta misteriosa, entre árvores altas e sombras intrigantes, em busca de um artefato lendário. De repente, você se depara com uma bifurcação na trilha. À sua esquerda, uma passagem estreita entre as árvores; à direita, um caminho mais amplo. Seguir pela passagem estreita à esquerda, um caminho sinuoso e cheio de mistério. Enquanto avança, ouve um ruído estranho à sua frente. Prefere investigar o som ou continuar em frente?",
        alternativas: [
            {
                texto: "Investigar o som: Você se aproxima cautelosamente do ruído e encontra uma antiga estátua coberta de musgo, segurando uma relíquia misteriosa. Você decide pegá-la e continuar sua Jordan.!",
                afirmacao: "afirmacao"
            },
            {
                texto: "Continuar em frente: Ignorando o ruído, você avança pela passagem estreita. De repente, a trilha desaba sob seus pés e você cai em uma caverna escura e profunda.  ",
                afirmacao: "afirmacao"
            }

        ]
},
{
        enunciado: "Optando pelo caminho mais amplo à direita, você segue adiante, esperando encontrar uma saída rápida da floresta. No entanto, à medida que avança, uma densa neblina começa a se formar ao seu redor. Você prefere continuar caminhando ou voltar e tentar outro caminho?",
        alternativas: [
            {
                texto:  "Continuar caminhando: Determinado a não desistir, você avança pela neblina espessa. De repente, você se depara com uma clareira iluminada por uma luz misteriosa. Lá, encontra o artefato lendário que tanto procurava.",
                afirmacao: "afirmacao"
            },
            {
                texto:  "Voltar e tentar outro caminho: Desconfiado da neblina densa, você decide voltar e tentar outro caminho. Mas ao retornar, percebe que a trilha mudou, deixando-o ainda mais perdido na floresta.",
                afirmacao: "afirmacao"
            }
        ]
},     
{
        enunciado: "Agora, diante de uma bifurcação na trilha novamente, você avista um riacho à sua esquerda e uma trilha íngreme à direita. Qual opção você prefere seguir?pós a elaboração do trabalho escrito, a professora realizou um debate entre a turma para entender como foi realizada a pesquisa e escrita. Nessa conversa também foi levantado um ponto muito importante: como a IA impacta o trabalho do futuro. Nesse debate, como você se posiciona?",
        alternativas: [
            {
                texto: "Seguir o riacho: Você decide seguir o riacho, na esperança de encontrar água fresca e talvez uma pista para sair da floresta. Logo à frente, encontra uma clareira onde avista um grupo de viajantes amigáveis que o ajudam a encontrar o caminho de volta.",
                afirmacao: "afirmacao"
            },
            {
                texto:  "Subir a trilha íngreme: Intrigado pela perspectiva de uma vista mais ampla, você escolhe subir a trilha íngreme. No topo, encontra um antigo templo coberto pela vegetação, onde descobre uma passagem secreta levando ao artefato lendário.",
                afirmacao: "afirmacao"
            }
        ]
},

{
    enunciado: " Agora, enfrentando uma nova encruzilhada, você avista uma ponte de pedra à esquerda e uma caverna escura à direita. Qual caminho você prefere explorar?    ",
    alternativas: [
        {
            texto:  "Você decide atravessar a ponte de pedra, que parece levar a terras desconhecidas. No entanto, ao meio do caminho, a ponte começa a desmoronar, mas você consegue chegar do outro lado ileso e encontra uma clareira onde finalmente pode descansar.Criar uma imagem utilizando uma plataforma de design como o Paint.",
            afirmacao: "afirmacao"
        },
        {
            texto: "Atraído pela promessa de mistérios ocultos, você opta por explorar a caverna escura. Lá dentro, encontra armadilhas antigas, mas consegue desvendá-las com sucesso, revelando o artefato lendário escondido nas profundezas da caverna.",
            afirmacao: "afirmacao"
        }
    ]
},
{
       
        enunciado: "Você tem um trabalho em grupo de biologia para entregar na semana seguinte, o andamento do trabalho está um pouco atrasado e uma pessoa do seu grupo decidiu fazer com ajuda da IA. O problema é que o trabalho está totalmente igual ao do chat. O que você faz? ",
        alternativas: [
            {
                texto: "O chat pode ser uma tecnologia muito avançada, mas é preciso manter a atenção pois toda máquina erra, por isso revisar o trabalho e contribuir com as perspectivas pessoais é essencial.",
                afirmacao: "afirmacao"
            },
            {
                texto:  "Escrever comandos para o chat é uma forma de contribuir com o trabalho, por isso não é um problema utilizar o texto inteiro.",
                afirmacao: "afirmacao"
            }
        ]
},
           

];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
     caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada){
    const afirmacoes = opcaoSelecionada.afirmacoes;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Seguindo uma série de escolhas cautelosas e estratégicas, você encontrou o artefato lendário e conseguiu sair da floresta são e salvo. Essa jornada nos ensina que, muitas vezes, é a combinação de coragem e sabedoria que nos guia pelo caminho certo. Ao enfrentar desafios desconhecidos, é essencial não apenas confiar em nossa intuição, mas também pensar com clareza e considerar as consequências de nossas ações.";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}
mostraPergunta();
