var produtos = [];

function inserir() {
  produtos.push({
    codigo: parseInt(codigo.value),
    descricao: descricao.value,
    preco: parseFloat(preco.value),
  });
  mostrar();
}

function alterar(i) {
  var novaDescricao = prompt("Digite a nova descrição:");
  var novoPreco = prompt("Digite o novo preço:");
  if (novaDescricao !== null && novoPreco !== null) {
    novoPreco = parseFloat(novoPreco);
    produtos[i].descricao = novaDescricao;
    produtos[i].preco = novoPreco;
    mostrar();
  }
}

function remover(i) {
  produtos.splice(i, 1);
  mostrar();
}

function mostrar() {
  console.log(JSON.stringify(produtos));
  var conteudo =
       "<table cellspacing='0' cellpading='4' border= '1'>" +
              "<tr><td>Código</td>" +
              "<td>Descrição</td>" +
              "<td>Preço</td></tr>";
    for (let i in produtos) {
    conteudo +=
            "<tr>" +
            // Célula para os botões de ação (Remover e Alterar)
            "<td>" +
            "<button onclick='remover(" + i + ")'><image src='deletar.png' height='12px'></button>" +
            "<button onclick='alterar(" + i + ")'><image src='alterar.png' height='12px'></button>" +
            "</td>" +
            // Células para os dados do produto
            "<td>" + produtos[i].codigo + "</td>" +
            "<td>" + produtos[i].descricao + "</td>" +
            "<td align='right'>" + produtos[i].preco.toFixed(2) + "</td>" +
            "</tr>";
  }

  conteudo += "</table>";
  tabela.innerHTML = conteudo;
}
