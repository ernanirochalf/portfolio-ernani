const botaoMostrarProjetos = document.querySelector('.btn-mostrar-projetos');
const ProjetosInativos = document.querySelectorAll('.projeto:not(.ativo)');

botaoMostrarProjetos.addEventListener('click', () => {
    mostrarMaisProjetos();
    esconderBotao();
});

function esconderBotao() {
    botaoMostrarProjetos.classList.add("remover");
}

function mostrarMaisProjetos() {
    ProjetosInativos.forEach(projetoInativo => {
        projetoInativo.classList.add('ativo');
    });
}
