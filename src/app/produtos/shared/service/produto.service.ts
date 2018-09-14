import { Http, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';
import { Produto } from './../model/Produto.model';

@Injectable()
export class ProdutoService {

  private produtosURL = 'http://localhost:8080/produtos';

  constructor(
    private http: Http
  ) { }

  public buscarProdutos(): Promise<Produto[]> {
    return this.http.get(`${this.produtosURL}`)
    .toPromise()
    .then(response => response.json());
  }

  public adicionarProduto(produto: Produto): Promise<Produto> {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post(`${this.produtosURL}`,
    JSON.stringify(produto), { headers })
    .toPromise()
    .then(response => response.json());
  }

  public atualizarProduto(produto: Produto): Promise<Produto> {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.put(`${this.produtosURL}/${produto.id}`,
    JSON.stringify(produto), { headers })
    .toPromise()
    .then(response => response.json());
  }

  public excluirProduto(id: number): Promise<void> {
    return this.http.delete(`${this.produtosURL}/${id}`)
    .toPromise()
    .then(response => null);
  }
}
