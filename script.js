var elementos = document.querySelectorAll('.player div');
var playerOPT = "";

//Baixar opacidade
function clearOpacity(){
    elementos.forEach((x,i)=>{
        elementos[i].style.opacity = 0.3;
    });
}

//Seleção do Jogador
elementos.forEach((x,i) => {
    x.addEventListener('click', (t)=>{
        clearOpacity();
        x.style.opacity = 1;
        playerOPT = t.target.getAttribute('opt');
        alert(playerOPT);
    });
});