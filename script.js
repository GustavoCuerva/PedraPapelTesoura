var elementos = document.querySelectorAll('.player div');
var IA = document.querySelectorAll('.IA div');
var playerOPT = "";
var iaOPT = "";

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