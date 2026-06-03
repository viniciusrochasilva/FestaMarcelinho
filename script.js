const avatar = document.getElementById("avatar");
const btnFalar = document.getElementById("btnFalar");

btnFalar.addEventListener("click", () => {

    avatar.classList.add("falando");

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

    fala.rate = 1.1;
    fala.pitch = 2;

    window.speechSynthesis.speak(fala);

});
