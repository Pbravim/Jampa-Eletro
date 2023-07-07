import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListagemProdutoTabelaComponent } from './listagem-produto-tabela.component';

describe('ListagemProdutoTabelaComponent', () => {
  let component: ListagemProdutoTabelaComponent;
  let fixture: ComponentFixture<ListagemProdutoTabelaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListagemProdutoTabelaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListagemProdutoTabelaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
