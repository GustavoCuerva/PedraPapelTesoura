var elementos = document.querySelectorAll('.player div');
var IA = document.querySelectorAll('.IA div');
var container = document.querySelector('.aling');
var opcoes = document.querySelector('.config');
var btns = document.querySelector('.btns');
var rodadasRestantes = document.querySelector('.rodadasRestante span');
var span_placarPlayer = document.querySelector('.placarJogador');
var span_placarIA = document.querySelector('.placarIA');
var popVencedor = document.querySelector('.vencedor');
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
        
        btns.classList.remove('none');
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
    if (numRodadas==0) {
        endGame();
    }
}

//Derrota

function derrota(){
    placarIA++;
    span_placarIA.innerHTML = placarIA;
}

//Vitória

function vitoria(){
    placarPlayer++;
    span_placarPlayer.innerHTML = placarPlayer;
}

//Fim de jogo

function endGame(){
    if (popVencedor.classList.contains('none')) {
        
        btns.classList.add('none');
        container.classList.add('none');
        popVencedor.classList.remove('none');

        document.querySelector('.placarJ').innerHTML = placarPlayer;
        document.querySelector('.placarI').innerHTML = placarIA;

        let msg = document.querySelector('.vencedor h2');

        if (placarPlayer>placarIA) {
            msg.innerHTML = 'Parabéns';
        }else if(placarIA>placarPlayer){
            msg.innerHTML = 'Foi por pouco, tente novamente';
        }else if(placarPlayer==placarIA){
            msg.innerHTML = 'Passou perto, bom empate';
        }
    }
}

//Jogar novamente com configurações diferentes
function jogarNovamente(){
    if (popVencedor.classList.contains('none')) {
    }else{
        popVencedor.classList.add('none');
    }
    if (container.classList.contains('none')) {
    }else{
        btns.classList.add('none');
        container.classList.add('none');
    }

    document.querySelector('input[name=rodadas]').value = '';
    placarPlayer = 0;
    span_placarPlayer.innerHTML = placarPlayer;

    placarIA = 0;
    span_placarIA.innerHTML = placarIA;

    opcoes.classList.remove('none');
}


//Reiniciar o Jogo com as mesmas configurações
function reiniciar(){
    
    if (popVencedor.classList.contains('none')) {
    }else{
        popVencedor.classList.add('none');
        btns.classList.remove('none');
        container.classList.remove('none');
    }

    
    numRodadas = parseInt(quantRodadas);
    rodadasRestantes.innerHTML = numRodadas;

    placarPlayer = 0;
    span_placarPlayer.innerHTML = placarPlayer;

    placarIA = 0;
    span_placarIA.innerHTML = placarIA;
}