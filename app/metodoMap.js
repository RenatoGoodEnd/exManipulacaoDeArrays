function aplicarDescontos (livros){
    const desconto = 0.3;

    //recebe o array de livros
    livrosComDesconto = livros.map(livro => {
        //ométodo MAP faz uma cópia dos dados do array original
        //realizando as modificações especificadas na arrow funtion
        return {...livro, preco: livro.preco - (livro.preco * desconto)}
        // retorna para vairável livrosComDesconto toda cópia do array com o desconto aplicado no preço
        //...livro indica a criação da cópia do array
    })
    return livrosComDesconto
    //retorna para a variável do método main o array copiado com desconto
    //para livrosComDesconto
}
