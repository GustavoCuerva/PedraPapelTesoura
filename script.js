var elementos = document.querySelectorAll('.player div');
var IA = document.querySelectorAll('.IA div');
var container = document.querySelector('.aling');
var opcoes = document.querySelector('.config');
var reiniciar = document.querySelector('.reiniciar');
var sair = document.querySelector('.sair');
var rodadasRestantes = document.querySelector('.rodadasRestante span');
var span_placarPlayer = document.querySelector('.placarJogador');
var spna_placarIA = document.querySelector('.placarIA');
var placarPlayer = 0;
var placarIA = 0;
var numRodadas;
var playerOPT = "";
var iaOPT = "";

                         //Customização do usuário

var nomeUsuario;
var quantRodadas;
var jogar = document.querySelector('.jogar');

jogar.addEventListener('click', ()=>{
    nomeUsuario = document.querySelector('input[name=nome]').value;
    quantRodadas = document.querySelector('input[name=rodadas]').value;
    let nomeJogador = document.querySelector('.nomeJogador'); 
    numRodadas = parseInt(quantRodadas);

    if (quantRodadas == '' || numRodadas <= 0) {
        alert("Preencha o numero de rodadas válido");
    }else{
    if (container.classList.contains('none')) {
        
        reiniciar.classList.remove('none');
        sair.classList.remove('none');
        container.classList.remove('none');
        opcoes.classList.add('none');

        if (nomeUsuario !='') {
            nomeJogador.innerHTML = nomeUsuario;    
        }
        
        rodadasRestantes.innerHTML = numRodadas;
    }
}
});


                        //Funcinalidades do JOGO
//Baixar opacidade
function clearOpacityIA(){
    IA.forEach((x,i)=>{
        IA[i].style.opacity = 0.3;
    });
}

function clearOpacityPlayer(){
    elementos.forEach((x,i)=>{
        elementos[i].style.opacity = 0.3;
    });
}

//Seleção do Computador
function jogarIA(){
    let mao = Math.floor(Math.random()*3);

    IA.forEach((x,i) => {
        if(i == mao){
            clearOpacityIA();
            x.style.opacity = 1;
            iaOPT = x.childNodes[0].getAttribute('opt');
        }
    });
    vencedor();
    menosRodada();
}

//Seleção do Jogador
elementos.forEach((x,i) => {
    x.addEventListener('click', (t)=>{
        clearOpacityPlayer();
        x.style.opacity = 1;
        playerOPT = t.target.getAttribute('opt');
        jogarIA();
    });
});

//Valindando o ganhador

function vencedor(){
    if(playerOPT=='pedra'){
        if (iaOPT=='pedra') {
            //Empate
            numRodadas++;

        }else if(iaOPT=='papel'){
            //Derrota
            derrota();

        }else if(iaOPT=='tesoura'){
            //Vitória
            vitoria();

        }
    }

    if(playerOPT=='papel'){
        if (iaOPT=='pedra') {
            //Vitória
            vitoria();

        }else if(iaOPT=='papel'){
            //Empate
            numRodadas++;
        
        }else if(iaOPT=='tesoura'){
            //Derrota
            derrota();

        }
    }

    if(playerOPT=='tesoura'){
        if (iaOPT=='pedra') {
            //Derrota
            derrota();
        
        }else if(iaOPT=='papel'){
            //Vitória
            vitoria();

        }else if(iaOPT=='tesoura'){
            //Empate
            numRodadas++;

        }
    }
}

//Diminui numero de rodadas

function menosRodada(){
    numRodadas--;
    rodadasRestantes.innerHTML = numRodadas;
}

//Derrota

function derrota(){
    placarIA++;
    spna_placarIA.innerHTML = placarIA;
}

//Vitória

function vitoria(){
    placarPlayer++;
    span_placarPlayer.innerHTML = placarPlayer;
}
