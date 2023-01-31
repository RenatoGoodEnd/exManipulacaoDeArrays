let btnOrdenacao = document.getElementById('btnOrdenarPorPreco')
btnOrdenacao.addEventListener('click', ordenarLivrosPorPreco)

function ordenarLivrosPorPreco(){
    const livrosOrdenadosPorPreco = livros.sort((a,b) => a.preco - b.preco)
    exibeLivrosNaTela(livrosOrdenadosPorPreco)
}