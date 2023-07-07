import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListagemProdutoTabelaComponent} from "./listagem-produto-tabela/listagem-produto-tabela.component";
import { MantemProdutoComponent} from "./mantem-produto/mantem-produto.component";
import { ListagemProdutoComponent} from "./listagem-produto/listagem-produto.component";
import { MatTableModule} from "@angular/material/table";
import { MatInputModule} from "@angular/material/input";
import { MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatCardModule} from "@angular/material/card";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {RouterLink} from "@angular/router";
import {MatBadgeModule} from "@angular/material/badge";


@NgModule({
  declarations: [
    MantemProdutoComponent,
    ListagemProdutoTabelaComponent,
    ListagemProdutoComponent],
  imports: [
    CommonModule,
    MatTableModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    FormsModule,
    RouterLink,
    MatBadgeModule,
    ReactiveFormsModule
  ]
})
export class ProdutoModule { }
