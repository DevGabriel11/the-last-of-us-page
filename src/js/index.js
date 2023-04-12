/*
OBJETIVO: quando clicarmos no botão temos que mostrar a imagem de fundo correspondente de cada botão.

1 - Pegar o código HTML dos botões
2- Identificar o clique do usuário no botão
3- Desmarcar o botão selecionado anterior
4- Marcar o botão clicado como se estivesse selecionado
5- Esconder a imagem de fundo anterior
6- Fazer aparecer a imagem de fundo correspondente ao botão clicado
*/


//1 - Pegar o código HTML dos botões

const botoesCarrossel = document.querySelectorAll('.botao')
const imagens = document.querySelectorAll('.imagem')

//2- Identificar o clique do usuário no botão

botoesCarrossel.forEach((botao, indice) => {
   
    botao.addEventListener('click',() => {
        
        desativarBotaoSelecionado()
     
        selecionarBotaoCarrossel(botao)
               
        esconderImagemAtiva()
        
        mostrarImagemDeFundo(indice)
            
    })
    

})

function selecionarBotaoCarrossel(botao) {
    botao.classList.add('selecionado')
}

function mostrarImagemDeFundo(indice) {
    imagens[indice].classList.add('ativa')
}

function esconderImagemAtiva() {
    const imagemAtiva = document.querySelector('.ativa')
    imagemAtiva.classList.remove('ativa')
}

function desativarBotaoSelecionado() {
    const botaoSelecionado = document.querySelector('.selecionado')
    botaoSelecionado.classList.remove('selecionado')
}
