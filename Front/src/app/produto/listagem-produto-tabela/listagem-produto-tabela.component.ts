import { Component, OnInit } from '@angular/core';
import { Produto } from '../../shared/model/produto';
import { ProdutoService } from '../../shared/service/produto.service';
import { MatTableDataSource} from "@angular/material/table";
import {MatSnackBar} from "@angular/material/snack-bar";
import {SnackbarService} from "../../shared/service/snackbar.service";
@Component({
  selector: 'app-listagem-produto-tabela',
  templateUrl: './listagem-produto-tabela.component.html',
  styleUrls: ['./listagem-produto-tabela.component.css']
})
export class ListagemProdutoTabelaComponent implements OnInit {

  produtos!: MatTableDataSource<Produto>;
  colunas: Array<string> = ['id', 'nome', 'preco', 'estoque', 'acoes'];

  constructor(private produtoService: ProdutoService,    private mensagemService : SnackbarService
  ) {
    this.produtos = new MatTableDataSource<Produto>([])
  }

  ngOnInit(): void {
    this.produtoService.listar().subscribe(
      produtosRetornandos =>
        this.produtos = new MatTableDataSource<Produto>(produtosRetornandos)
    );
  }
  filtrar(value: string): void {
    this.produtos.filter = value.trim().toLowerCase();
  }
  apagar(id:number): void{
    this.produtoService.apagar(+id).subscribe(
      produtoRemovido =>{
        const indx = this.produtos.data.findIndex(produto => produto.id === +id);
        if (indx >-1) {
          this.mensagemService.erro('Produto Removido');
          this.produtos.data.splice(indx, 1)
          this.produtos = new MatTableDataSource<Produto>(this.produtos.data)
        }
      }
    )
  }
}
