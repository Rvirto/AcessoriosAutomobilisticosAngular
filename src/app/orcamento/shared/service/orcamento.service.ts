import { ProdutoCarrinho } from './../../../carrinho/shared/model/ProdutoCarrinho.model';
import { AuthHttp } from 'angular2-jwt';
import { Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';
import { Orcamento } from '../model/Orcamento.model';

@Injectable()
export class OrcamentoService {

  private orcamentoURL = 'http://localhost:8080/orcamentos';

  constructor(
    private http: AuthHttp
  ) { }

  public fazerOrcamento(produtosCarrinho: ProdutoCarrinho[], idCliente: number, idCarrinho: number): Promise<Orcamento> {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post(`${this.orcamentoURL}/${idCliente}/${idCarrinho}`,
     JSON.stringify(produtosCarrinho), { headers })
    .toPromise()
    .then(response => response.json());
  }

  public buscarOrcamento(idOrcamento: number): Promise<Orcamento> {
    return this.http.get(`${this.orcamentoURL}/${idOrcamento}`)
    .toPromise()
    .then(response => response.json());
  }

  public buscarMeusOrcamentos(idClient: number): Promise<Orcamento[]> {
    return this.http.get(`${this.orcamentoURL}/meusOrcamentos/${idClient}`)
    .toPromise()
    .then(response => response.json());
  }

  public excluirOrcamento(idOrcamento: number): Promise<void> {
    return this.http.delete(`${this.orcamentoURL}/${idOrcamento}`)
    .toPromise()
    .then(() => null);
  }

  public buscarTodosOrcamentos(): Promise<Orcamento[]> {
    return this.http.get(`${this.orcamentoURL}`)
    .toPromise()
    .then(response => response.json());
  }
}
