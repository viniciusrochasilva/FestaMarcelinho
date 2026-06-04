// CONTAGEM REGRESSIVA

const contador = document.getElementById("contador");

function atualizarContador(){

    const festa = new Date("2026-07-09T15:00:00");

    const agora = new Date();

    const diferenca = festa - agora;

    const dias = Math.floor(diferenca / 1000 / 60 / 60 / 24);

    contador.innerHTML =
        `🎂 Faltam ${dias} dias para minha festa!`;
}

setInterval(atualizarContador,1000);

atualizarContador();


// NARRAÇÃO

document.getElementById("ouvir")
.addEventListener("click", ()=>{

    const texto = `
    Oi, titios, titias e amiguinhos! Tudo bem?

    Eu sou o Marcelinho e estou muito feliz porque estou fazendo um aninho!

    Quero convidar vocês para comemorar esse dia tão especial comigo!

    Minha festinha vai ser no dia nove de julho, às três horas da tarde, na Dimi Festa.

    Vai ter muita diversão, brincadeiras e momentos especiais!

    Eu vou ficar muito feliz com a sua presença!

    Não esqueça de clicar no botão aqui embaixo para confirmar que você vem, tá bom?

    Estou esperando todos vocês com muito carinho!
    `;

    const fala = new SpeechSynthesisUtterance(texto);

    fala.lang = "pt-BR";

    fala.pitch = 2;

    fala.rate = 1.05;

    fala.volume = 1;

    speechSynthesis.cancel();

    speechSynthesis.speak(fala);

});


// CORAÇÕES

function criarCoracao(){

    const heart = document.createElement("div");

    heart.classList.add("heart");

    heart.innerHTML = "💙";

    heart.style.left = Math.random() * 100 + "%";

    heart.style.fontSize =
        (20 + Math.random() * 25) + "px";

    heart.style.animationDuration =
        (4 + Math.random() * 4) + "s";

    document.body.appendChild(heart);

    setTimeout(()=>{
        heart.remove();
    },8000);
}

setInterval(criarCoracao,600);
