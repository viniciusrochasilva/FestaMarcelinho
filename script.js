// =========================
// CONTAGEM REGRESSIVA
// =========================

const contador = document.getElementById("contador");

function atualizarContador() {
    const festa = new Date("2026-07-09T15:00:00");
    const agora = new Date();

    const diferenca = festa - agora;

    if (diferenca <= 0) {
        contador.innerHTML = "🎉 Hoje é minha festa!";
        return;
    }

    const dias = Math.ceil(diferenca / 1000 / 60 / 60 / 24);

    contador.innerHTML = `🎂 Faltam ${dias} dias para minha festa!`;
}

setInterval(atualizarContador, 1000);
atualizarContador();


// =========================
// ÁUDIO MP3
// =========================

const botaoOuvir = document.getElementById("ouvir");
const audio = document.getElementById("audioConvite");

botaoOuvir.addEventListener("click", () => {
    audio.pause();
    audio.currentTime = 0;

    audio.play();

    botaoOuvir.innerHTML = "🔊 Tocando...";
});

audio.addEventListener("ended", () => {
    botaoOuvir.innerHTML = "🎙️ Ouvir Convite";
});


// =========================
// CORAÇÕES
// =========================

function criarCoracao() {
    const heart = document.createElement("div");

    heart.classList.add("heart");
    heart.innerHTML = "💙";

    heart.style.left = Math.random() * 100 + "%";
    heart.style.fontSize = (20 + Math.random() * 25) + "px";
    heart.style.animationDuration = (4 + Math.random() * 4) + "s";

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 8000);
}

setInterval(criarCoracao, 600);
