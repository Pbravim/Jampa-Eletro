export class Produto {

  id?: number;
  nome = '';
  estoque: number;
  preco: number;

  constructor(id:0, nome: '', estoque: 0, preco: 0 ) {
    this.id = id;
    this.nome = nome;
    this.estoque = estoque;
    this.preco = preco;
  }
}
