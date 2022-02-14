var elementos = document.querySelectorAll('.player-options div > img');
var playerOpt = "";
var inimigoOpt="";



function validarVitoria(){

    if(playerOpt == "papel"){

        let vencedor = document.querySelector('.vencedor');

        if(inimigoOpt == "papel"){
            //empate
            vencedor.innerHTML = "Empate!";
        }else if(inimigoOpt == "tesoura"){
            //inimigo perdeu
            vencedor.innerHTML = "Você foi humilhado!";
        }else if(inimigoOpt == "pedra"){
            //player ganhou
            vencedor.innerHTML = "Você ganhou!";
        }

    }

    if(playerOpt == "pedra"){

        let vencedor = document.querySelector('.vencedor');

        if(inimigoOpt == "papel"){
            //empate
            vencedor.innerHTML = "Você foi humilhado!";
        }else if(inimigoOpt == "tesoura"){
            //inimigo perdeu
            vencedor.innerHTML = "Você ganhou!";
        }else if(inimigoOpt == "pedra"){
            //player ganhou
            vencedor.innerHTML = "Empate!";
        }

    }

    if(playerOpt == "tesoura"){

        let vencedor = document.querySelector('.vencedor');

        if(inimigoOpt == "papel"){
            //empate
            vencedor.innerHTML = "Você ganhou!";
        }else if(inimigoOpt == "tesoura"){
            //inimigo perdeu
            vencedor.innerHTML = "Empate!";
        }else if(inimigoOpt == "pedra"){
            //player ganhou
            vencedor.innerHTML = "Você foi humilhado!";
        }

    }





}


function resetInimigo(){
    const enemyOpt = document.querySelectorAll('.enemy-options div');
    for(var i = 0; i < enemyOpt.length; i++){
        enemyOpt[i].childNodes[0].style.opacity = 0.3;
    }
}



function inimigoJogar(){
    let rand = Math.floor(Math.random()*3);

    const enemyOpt = document.querySelectorAll('.enemy-options div');
    resetInimigo();
    for(var i = 0; i < enemyOpt.length; i++){
        if(i==rand){
          enemyOpt[i].childNodes[0].style.opacity = 1;
          inimigoOpt = enemyOpt[i].childNodes[0].getAttribute('opt');
        
        }
    }


    validarVitoria();
   // alert(playerOpt);
   // alert(inimigoOpt);
}



function resetOpacityPlayer(){
    for(var i=0; i < elementos.length; i++){
        elementos[i].style.opacity = 0.3;
    }
}



for(var i=0; i < elementos.length; i++){
    elementos[i].addEventListener('click',function(t){
        resetOpacityPlayer();
        t.target.style.opacity = 1;
        playerOpt = t.target.getAttribute('opt');

        inimigoJogar();

    });
}