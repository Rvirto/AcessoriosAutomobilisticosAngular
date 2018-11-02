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

  public fazerOrcamento(orcamento: Orcamento): Promise<Orcamento> {
    console.log(orcamento);
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post(`${this.orcamentoURL}`, JSON.stringify(orcamento), { headers })
    .toPromise()
    .then(response => response.json());
  }

  public buscarOrcamento(idOrcamento: number): Promise<Orcamento> {
    return this.http.get(`${this.orcamentoURL}/${idOrcamento}`)
    .toPromise()
    .then(response => response.json());
  }
}
