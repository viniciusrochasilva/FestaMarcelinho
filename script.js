const contador = document.getElementById("contador");

function atualizarContador() {
    const festa = new Date("2026-07-09T15:00:00");
    const agora = new Date();
    const diferenca = festa - agora;

    const dias = Math.ceil(diferenca / 1000 / 60 / 60 / 24);

    if (dias > 0) {
        contador.innerHTML = `🎂 Faltam ${dias} dias para minha festa!`;
    } else {
        contador.innerHTML = `🎉 É hoje a minha festinha!`;
    }
}

setInterval(atualizarContador, 1000);
atualizarContador();

const botaoOuvir = document.getElementById("ouvir");
const audio = document.getElementById("audioConvite");
const avatar = document.getElementById("avatar");

botaoOuvir.addEventListener("click", () => {
    audio.pause();
    audio.currentTime = 0;

    avatar.classList.add("falando");
    botaoOuvir.innerHTML = "🔊 Marcelinho falando...";

    audio.play();
});

audio.addEventListener("ended", () => {
    avatar.classList.remove("falando");
    botaoOuvir.innerHTML = "🎙️ Ouvir Convite";
});

audio.addEventListener("pause", () => {
    if (audio.currentTime === 0 || audio.ended) {
        avatar.classList.remove("falando");
        botaoOuvir.innerHTML = "🎙️ Ouvir Convite";
    }
});

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
