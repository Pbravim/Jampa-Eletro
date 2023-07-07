import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MantemProdutoComponent } from './produto/mantem-produto/mantem-produto.component';
import { ListagemProdutoComponent } from './produto/listagem-produto/listagem-produto.component';
import {ListagemProdutoTabelaComponent} from './produto/listagem-produto-tabela/listagem-produto-tabela.component'

const routes: Routes = [
  {path: '', redirectTo:'estoque', pathMatch:'full'},
  {
    path: 'cadastroproduto',
    component: MantemProdutoComponent
  },
  {
    path: 'editarproduto/:id',
    component: MantemProdutoComponent
  },
  {
    path: 'estoque',
    component: ListagemProdutoComponent
  },
  {
    path: 'estoquetabela',
    component: ListagemProdutoTabelaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
