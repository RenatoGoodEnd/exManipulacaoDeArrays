const botoes = document.querySelectorAll('.btn')
botoes.forEach(btn => btn.addEventListener('click', filtrarLivros))

function filtrarLivros(){
    const elementoBotao = document.getElementById(this.id)
    const categoria = elementoBotao.value 
    let livrosFiltrados = categoria == 'disponivel' ? livros.filter(livro => livro.quantidade > 0)
     : livros.filter(livro => livro.categoria == categoria)
     //OPERAÇÃO TERNÁRIA
     //se categoria = disponivel faça filtro de livros para livro maior que quantidade 0
     //senão filtra livros por categoria clicada
    exibeLivrosNaTela(livrosFiltrados)
}