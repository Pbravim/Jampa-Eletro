import {Injectable} from '@angular/core';
import {Produto} from "../model/produto";
import {from, Observable, of} from "rxjs";
import {AngularFirestore, AngularFirestoreCollection} from "@angular/fire/compat/firestore";
import {map} from 'rxjs/operators'
@Injectable({
  providedIn: 'root'
})
export class ProdutoFirestoreService {

  colecaoProdutos!: AngularFirestoreCollection<Produto>;
  NOME_COLECAO = 'produtos'
  constructor(private afs:AngularFirestore) {
    this.colecaoProdutos = afs.collection(this.NOME_COLECAO);
  }
  listar(): Observable<Produto[]> {
    return this.colecaoProdutos.valueChanges({idField: 'id'});
  }


  inserir(produto: Produto): Observable<object> {
    delete produto.id;
    return from(this.colecaoProdutos.add(Object.assign({}, produto)));
  }


  apagar(id: string): Observable<void> {
    return from(this.colecaoProdutos.doc(id).delete());
  }


  pesquisarPorId(id: string): Observable<Produto> {
    // como o objeto retornado pelo get é um DocumentData, e não um usuário, transformamos a partir de um pipe e mapeamos de um document
    //  para o tipo usuário
    return this.colecaoProdutos.doc(id).get().pipe(map(document => new Produto(document.id, document.data())));
  }


  atualizar(produto: Produto): Observable<void> {
    const id = produto.id;
    delete produto.id;
    if (id !== undefined) {
      return from(this.colecaoProdutos.doc(id.toString()).update(Object.assign({}, produto)));
    }
    return of();
  }

}
