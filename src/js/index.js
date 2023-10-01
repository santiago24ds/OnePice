//    OBJETIVO 1 - quando clicar no botão do personagem na lista, marcar o botao como selecionado 

//    OBJETIVO 2 - quando clicar no botão do personagem mostrar as informações do personagem

const botoes = document.querySelectorAll(".botao");

const personagens = document.querySelectorAll(".personagem");

botoes.forEach((botao, indice) => {
    botao.addEventListener("click", () => {

       desselecionarbotao();

botao.classList.add("selecionado");

        desscelecionarPersonagem();
      
        personagens[indice].classList.add("selecionado");

    });
});

function desscelecionarPersonagem() {
    const personagemSelecionado = document.querySelector(".personagem.selecionado");
    personagemSelecionado.classList.remove("selecionado");
}

function desselecionarbotao() {
    const botaoSelecionado = document.querySelector(".botao.selecionado");
    botaoSelecionado.classList.remove("selecionado");
}

