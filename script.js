var elementos = document.querySelectorAll('.player div');
var IA = document.querySelectorAll('.IA div');
var container = document.querySelector('.aling');
var opcoes = document.querySelector('.config');
var reiniciar = document.querySelector('.reiniciar');
var sair = document.querySelector('.sair');
var rodadasRestantes = document.querySelector('.rodadasRestante span');
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

            alert('Empate');

        }else if(iaOPT=='papel'){

            alert('Derrota');

        }else if(iaOPT=='tesoura'){
            
            alert('Vitória');

        }
    }

    if(playerOPT=='papel'){
        if (iaOPT=='pedra') {

            alert('Vitória');

        }else if(iaOPT=='papel'){
            
            alert('Empate');
        
        }else if(iaOPT=='tesoura'){
            
            alert('Derrota');

        }
    }

    if(playerOPT=='tesoura'){
        if (iaOPT=='pedra') {
        
            alert('Derrota');
        
        }else if(iaOPT=='papel'){
        
            alert('Vitória');
        
        }else if(iaOPT=='tesoura'){
            
            alert('Empate');

        }
    }
}