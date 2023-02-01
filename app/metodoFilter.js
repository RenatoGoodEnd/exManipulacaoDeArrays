const botoes = document.querySelectorAll('.btn')
botoes.forEach(btn => btn.addEventListener('click', filtrarLivros))

function filtrarLivros(){
    const elementoBotao = document.getElementById(this.id)
    console.log(elementoBotao)
    const categoria = elementoBotao.value 
    console.log(categoria)
    let livrosFiltrados = categoria == 'disponivel' ? filtrarPorDisponibilidade()
     : filtrarPorCategoria(categoria)
     //OPERAÇÃO TERNÁRIA
     //se categoria = disponivel faça filtro de livros para livro maior que quantidade 0
     //senão filtra livros por categoria clicada

    exibeLivrosNaTela(livrosFiltrados)

    if(categoria == 'disponivel'){
        const valotTotalDosLivros = calculaValorTotalDosLivros(livrosFiltrados)
        exibeValorTotalDosLivros(valotTotalDosLivros)
    }
}

function filtrarPorCategoria(categoria) {
    return livros.filter(livro => livro.categoria == categoria)
}

function filtrarPorDisponibilidade() {
    return livros.filter(livro => livro.quantidade > 0)
}
 function exibeValorTotalDosLivros(valotTotalDosLivros){
    elementoDoValorTotalDeLivroDisponivel.innerHTML = `
        <div class="livros__disponiveis">
        <p>Todos os livros disponíveis por R$ <span id="valor">${valotTotalDosLivros}</span></p>
        </div>
    `
 }