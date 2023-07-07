export class Produto {

  id?: string;
  nome = '';
  estoque: number;
  preco: number;

  constructor(id= "", produto: Produto = { nome: '', estoque: 0, preco: 0 }) {
    this.id = id;
    this.nome = produto.nome;
    this.estoque = produto.estoque;
    this.preco = produto.preco;
  }
}
