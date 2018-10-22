import { Carro } from './../model/Carros.model';
import { Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import { ToastyService } from 'ng2-toasty';
import 'rxjs/add/operator/toPromise';
import { Cliente } from '../model/Cliente.model';
import { AuthHttp } from 'angular2-jwt';

@Injectable()
export class CarroService {

  carrosURL = 'http://localhost:8080/carros';
  clientesURL = 'http://localhost:8080/clientes';

  constructor(
    private http: AuthHttp,
    private toastyService: ToastyService
  ) { }

  public buscarCarros(): Promise<Carro[]> {
    return this.http.get(`${this.carrosURL}`).toPromise()
    .then(response => response.json())
    .catch(erro => {
      this.toastyService.clearAll();
      this.toastyService.error('Problemas técnicos ao buscar Carros cadastrados!');
    });

  }

  public buscarCarroPeloId(id: number): Promise<Carro> {
    return this.http.get(`${this.carrosURL}/${id}`).toPromise()
    .then(response => response.json())
    .catch(erro => {
      this.toastyService.clearAll();
      this.toastyService.error('Problemas técnicos ao buscar Carro selecionado!');
    });
  }

  public adicionarCarro(carro: Carro): Promise<Carro> {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post(`${this.carrosURL}`, JSON.stringify(carro), { headers })
    .toPromise()
    .then(response => response.json())
    .catch(erro => {
      this.toastyService.clearAll();
      this.toastyService.error('Problemas técnicos ao adicionar novo carro!');
    });
  }

  public atualizarCarro(carro: Carro): Promise<Carro> {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.put(`${this.carrosURL}/${carro.id}`, JSON.stringify(carro), { headers })
    .toPromise()
    .then(response => response.json())
    .catch(erro => {
      this.toastyService.clearAll();
      this.toastyService.error('Problemas técnicos ao atualizar este Carro!');
    });
  }

  public deletarCarro(id: number): Promise<void> {
    return this.http.delete(`${this.carrosURL}/${id}`)
    .toPromise()
    .then(() => null)
    .catch(erro => {
      this.toastyService.clearAll();
      this.toastyService.error('Problemas técnicos ao excluir este Carro!');
    });
  }

  public buscarClientes(): Promise<Cliente[]> {
    return this.http.get(`${this.clientesURL}`)
    .toPromise()
    .then(response => response.json())
    .catch(erro => {
      this.toastyService.clearAll();
      this.toastyService.error('Problemas Técnicos ao buscar Clientes cadastrados!');
    });
  }
}
