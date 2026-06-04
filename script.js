const avatar = document.getElementById("avatar");
const audio = document.getElementById("audio");

const contador = document.getElementById("contador");

function atualizarContador(){

    const festa =
        new Date("2026-07-09T15:00:00");

    const agora =
        new Date();

    const diferenca =
        festa - agora;

    const dias =
        Math.floor(
            diferenca /
            1000 /
            60 /
            60 /
            24
        );

    contador.innerHTML =
        `🎂 Faltam ${dias} dias`;
}

setInterval(atualizarContador,1000);
atualizarContador();

document
.getElementById("btnOuvir")
.addEventListener("click",()=>{

    audio.currentTime = 0;

    audio.play();

    avatar.classList.add("falando");

});

audio.addEventListener("ended",()=>{

    avatar.classList.remove("falando");

});
