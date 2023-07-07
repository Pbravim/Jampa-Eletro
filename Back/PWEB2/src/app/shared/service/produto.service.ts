import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Produto} from '../model/produto';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  URL_PRODUTOS = 'http://localhost:3000/produtos';
  constructor(private httpClient: HttpClient) { }

  listar(): Observable<Produto[]> {
    return this.httpClient.get<Produto[]>(this.URL_PRODUTOS);
  }

  inserir(produto: Produto): Observable<Produto> {
    return this.httpClient.post<Produto>(this.URL_PRODUTOS, produto);
  }

  atualizar(produto: Produto): Observable<Produto> {
    return this.httpClient.put<Produto>
    (`${this.URL_PRODUTOS}/${produto.id}`, produto);
  }

  apagar(id: string): Observable<Produto> {
    return this.httpClient.delete<Produto>(`${this.URL_PRODUTOS}/${id}`)
  }

  pesquisarPorId(id: string): Observable<Produto> {
    return this.httpClient.get<Produto>(`${this.URL_PRODUTOS}/${id}`)
  }
}
