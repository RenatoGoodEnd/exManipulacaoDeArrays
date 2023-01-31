const elementoDoLivro = document.getElementById('livros')

//.toFixed(2) fixa o preço em apenas duas casas decimais

function exibeLivrosNaTela(listaDeLivros){
  elementoDoLivro.innerHTML = ''
    listaDeLivros.forEach(livro => {
      let disponibilidade = livro.quantidade > 0 ? 'livro_imagens' : 'livro_imagens indisponivel'
        elementoDoLivro.innerHTML +=`
        <div class="livro">
        <img class="${disponibilidade}" src="${livro.imagem}" alt="${livro.alt}" />
        <h2 class="livro__titulo">
          ${livro.titulo}
        </h2>
        <p class="livro__descricao">${livro.autor}</p>
        <p class="livro__preco" id="preco">${livro.preco.toFixed(2)}</p>
        <div class="tags">
          <span class="tag">${livro.categoria}</span>
        </div>
      </div>
        `
    });
}