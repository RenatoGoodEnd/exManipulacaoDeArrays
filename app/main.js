let livros = []
const endPointDaApi = 'https://guilhermeonrails.github.io/casadocodigo/livros.json'
getBuscaDadosLivros()
const elementoDoLivro = document.getElementById('livros')

async function getBuscaDadosLivros(){
    const res = await fetch(endPointDaApi)
    livros = await res.json()
    console.table(livros)
    let livrosComDesconto = aplicarDescontos(livros)
    //a constante criada recebe o valor return da função

    exibeLivrosNaTela(livrosComDesconto)
    //enviado como parâmetro uma cópia do array de livros original, agora com o desconto aplicado
    //essa cópia é feita pelo método MAP
}