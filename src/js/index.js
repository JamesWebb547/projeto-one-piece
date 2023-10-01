const personagens = document.querySelectorAll(".personagem");

const botoes = document.querySelectorAll ('.botao');

botoes.forEach((botao, indice) => {
    botao.addEventListener("click", () => {
        ("clicou no botão", botao);

        desselecionarBotao();

        botao.classList.add("selecionado");

        desselecionarPersonagens();

        personagens[indice].classList.add("selecionado")

    });
});

function desselecionarPersonagens() {
    const personagemSelecionado = document.querySelector(".personagem.selecionado");
    personagemSelecionado.classList.remove("selecionado");
}

function desselecionarBotao() {
    const botaoSelecionado = document.querySelector(".botao.selecionado");
    botaoSelecionado.classList.remove("selecionado");
}
