import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Produto} from '../model/produto';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  URL_PRODUTOS = 'http://localhost:8081';
  constructor(private httpClient: HttpClient) { }

  listar(): Observable<Produto[]> {
    return this.httpClient.get<Produto[]>(this.URL_PRODUTOS + '/produtos');
  }

  inserir(produto: Produto): Observable<Produto> {
    return this.httpClient.post<Produto>(this.URL_PRODUTOS + '/produtos', produto);
  }

  atualizar(produto: Produto): Observable<Produto> {
    console.log(produto);
    return this.httpClient.put<Produto>
    (`${this.URL_PRODUTOS}/produtos/${produto.id}`,  produto);
  }

  apagar(id: number): Observable<Produto> {
    return this.httpClient.delete<Produto>(`${this.URL_PRODUTOS}/produtos/${id}`)
  }

  pesquisarPorId(id: number): Observable<Produto> {
    return this.httpClient.get<Produto>(`${this.URL_PRODUTOS}/produtos/${id}`);
  }
}
