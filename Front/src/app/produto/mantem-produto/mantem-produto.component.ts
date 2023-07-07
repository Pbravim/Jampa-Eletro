import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Produto } from '../../shared/model/produto';
import { ActivatedRoute, Router } from '@angular/router';
import { ProdutoService } from '../../shared/service/produto.service';
import { Location } from "@angular/common";
import { SnackbarService } from "../../shared/service/snackbar.service";

@Component({
  selector: 'app-mantem-produto',
  templateUrl: './mantem-produto.component.html',
  styleUrls: ['./mantem-produto.component.css']
})
export class MantemProdutoComponent implements OnInit {
  produtoForm: FormGroup;
  novoCadastro = true;
  nomeBotaoManutencao = "Cadastrar";
  IdProdutoEditar: any;
  previousUrl: string = '';

  produtos: Produto[] = [];

  ngOnInit(): void {
    this.previousUrl = this.location.getState() as string;
    this.IdProdutoEditar = this.rotaAtual.snapshot.paramMap.get('id');
    if (this.IdProdutoEditar) {
      this.novoCadastro = false;
      this.nomeBotaoManutencao = "Salvar";
    }
  }

  constructor(
    private rotaAtual: ActivatedRoute,
    private roteador: Router,
    private produtoService: ProdutoService,
    private mensagemService: SnackbarService,
    private location: Location,
    private formBuilder: FormBuilder
  ) {
    this.produtoForm = this.formBuilder.group({
      nome: ['', Validators.required],
      preco: ['', [Validators.required, Validators.pattern(/^\d+(\.\d{1,2})?$/)]],
      estoque: ['', [Validators.required, Validators.pattern(/^(0|[1-9]\d{0,2})$/)]],
    });

    const idEditar = this.rotaAtual.snapshot.paramMap.get('id');

    if (idEditar) {
      this.produtoService.pesquisarPorId(+idEditar).subscribe(
        produto => {
          this.produtoForm.patchValue(produto);
        }
      );
    }
  }

  inserir(): void {
    if (this.novoCadastro && this.produtoForm.valid) {
      this.produtoService.inserir(this.produtoForm.value).subscribe(
        produto => { this.mensagemService.sucesso("Produto Cadastrado"); }
      );
      this.location.back();
    }
  }

  atualizar(): void {
    if (this.produtoForm.valid) {
      this.produtoService.atualizar(this.produtoForm.value).subscribe();
      this.mensagemService.sucesso("Produto Atualizado");
      this.location.back();
    }
  }
}
