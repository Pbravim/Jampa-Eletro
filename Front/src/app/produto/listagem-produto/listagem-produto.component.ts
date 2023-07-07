import { Component, OnInit } from '@angular/core';
import { Produto } from '../../shared/model/produto';
import { ProdutoService } from '../../shared/service/produto.service';
import {SnackbarService} from "../../shared/service/snackbar.service";
@Component({
  selector: 'app-listagem-produto',
  templateUrl: './listagem-produto.component.html',
  styleUrls: ['./listagem-produto.component.css']
})
export class ListagemProdutoComponent implements OnInit{

  produtos: Produto[] = []

  constructor(private produtoService: ProdutoService,    private mensagemService : SnackbarService
){}

  ngOnInit(): void {
    this.produtoService.listar().subscribe(
      produtosRetornandos =>
        this.produtos = produtosRetornandos
    );
  }

  excluir (produtoRemove: Produto):void{
    if (produtoRemove.id){
      this.produtoService.apagar(+produtoRemove.id).subscribe(
        produtoRemovido =>{
          this.mensagemService.erro('Produto removido');
          const indx = this.produtos.findIndex(produto =>
            produto.id === produtoRemove.id);
          this.produtos.splice(indx,1)
        }
      )
    }
  }

}
