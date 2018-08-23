import { Funcionario } from './../model/funcionario.model';
import { ToastyService } from 'ng2-toasty';
import { Http, Headers } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class FuncionarioService {
  private funcionarioURL = 'http://localhost:8080/funcionarios';

  constructor(
    private http: Http,
    private toastyService: ToastyService) { }

  public listarFuncionarios(): Promise<Funcionario[]> {
    return this.http.get(this.funcionarioURL).toPromise()
    .then(response => response.json())
    .catch(erro => {
      this.toastyService.clearAll();
      this.toastyService.error('Erro ao buscar Funcionários');
      console.log('Erro ao buscar Funcionário', erro);
    } );
  }

  public buscarFuncionarioId(id: number): Promise<Funcionario> {
    return this.http.get(`${this.funcionarioURL}/${id}`).toPromise()
    .then(response => response.json())
    .catch(erro => {
      this.toastyService.clearAll();
      this.toastyService.error('Erro ao buscar Funcionário');
      console.log('Erro ao buscar Funcionário', erro);
    });
  }

  public atualizarFuncionario(funcionario: Funcionario): Promise<Funcionario> {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.put(`${this.funcionarioURL}/${funcionario.id}`, JSON.stringify(funcionario), { headers })
    .toPromise()
    .then(response => response.json())
    .catch(erro => {
      this.toastyService.clearAll();
      this.toastyService.error('Erro ao atualizar Funcionário');
    });
  }

  public novoFuncionario(funcionario: Funcionario): Promise<Funcionario> {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post(`${this.funcionarioURL}`, JSON.stringify(funcionario), { headers }).toPromise()
    .then(response => response.json())
    .catch(erro => {
      this.toastyService.clearAll();
      this.toastyService.error('Erro ao cadastrar Funcionário!');
    });
  }

  public excluirfuncionario(id: number): Promise<Funcionario> {
    return this.http.delete(`${this.funcionarioURL}/${id}`).toPromise()
    .then(() => null)
    .catch(erro => {
      this.toastyService.clearAll();
      this.toastyService.error('Problema ao excluir Funcionário');
      console.log('Erro ao excluir funcionário!', erro);
    });
  }

}
