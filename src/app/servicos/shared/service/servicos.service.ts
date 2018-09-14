import { Http, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';
import { Servico } from './../model/Servico.model';

@Injectable()
export class ServicosService {

  private servicosURL = 'http://localhost:8080/servicos';

  constructor(
    private http: Http
  ) { }

  public buscarServico(): Promise<Servico[]> {
    return this.http.get(`${this.servicosURL}`)
    .toPromise()
    .then(response => response.json());
  }

  public atualizarServico(servico: Servico): Promise<Servico> {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.put(`${this.servicosURL}/${servico.id}`,
    JSON.stringify(servico), { headers })
    .toPromise()
    .then(response => response.json());
  }

  public adicionarServico(servico: Servico): Promise<Servico> {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post(`${this.servicosURL}`,
    JSON.stringify(servico), { headers })
    .toPromise()
    .then(response => response.json());
  }

  public removerServico(id: number): Promise<void> {
    return this.http.delete(`${this.servicosURL}/${id}`)
    .toPromise()
    .then(response => null);
  }
}
