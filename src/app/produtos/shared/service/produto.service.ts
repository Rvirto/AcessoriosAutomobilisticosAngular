import { Servico } from './../../../servicos/shared/model/Servico.model';
import { Fornecedor } from './../../../fornecedores/shared/model/fornecedor.model';
import { Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';
import { Produto } from './../model/Produto.model';
import { AuthHttp } from 'angular2-jwt';

@Injectable()
export class ProdutoService {

  private produtosURL = 'http://localhost:8080/produtos';
  private fornecedorURL = 'http://localhost:8080/fornecedores';
  private servicosURL = 'http://localhost:8080/servicos';

  constructor(
    private http: AuthHttp
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

  public listarFornecedores(): Promise<Fornecedor[]> {
    return this.http.get(this.fornecedorURL).toPromise()
    .then(response => response.json());
  }

  public buscarServico(): Promise<Servico[]> {
    return this.http.get(`${this.servicosURL}`)
    .toPromise()
    .then(response => response.json());
  }

  public buscarProdutoId(id: number): Promise<Produto> {
    return this.http.get(`${this.produtosURL}/${id}`)
    .toPromise()
    .then(response => response.json());
  }
}
