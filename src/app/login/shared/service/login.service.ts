import { Cliente } from './../../../carros/shared/model/Cliente.model';
import { Http, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';
import { JwtHelper } from 'angular2-jwt';

@Injectable()
export class LoginService {

  private urlLogin = 'http://localhost:8080/oauth/token';
  public jwtPayLoad: any;
  public taLogado: boolean;
  private clientesURL = 'http://localhost:8080/clientes';

  constructor(
    private http: Http,
    private jwtHelper: JwtHelper
  ) {
    this.carregarToken();
   }

  public login(usuario: string, senha: string): Promise<void> {
    const headers = new Headers();
    headers.append('Authorization', 'Basic cmVuYXRvOnZpcnRv');
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    const body = `username=${usuario}&password=${senha}&grant_type=password`;

    return this.http.post(`${this.urlLogin}`, body, { headers })
    .toPromise()
    .then(response => {
      this.armazenarToken(response.json().access_token);
    });
  }

  private armazenarToken(token: string) {
    this.jwtPayLoad = this.jwtHelper.decodeToken(token);
    localStorage.setItem('token', token);
  }

  public carregarToken() {
    const token = localStorage.getItem('token');
    if ( token ) {
      this.armazenarToken(token);
      if ( this.jwtHelper.isTokenExpired(token)) {
        this.taLogado = false;
      } else {
        this.taLogado = true;
      }
    }
  }

  public temPermissao(permissao: string) {
    return this.jwtPayLoad && this.jwtPayLoad.authorities.includes(permissao);
  }

  public limparAccesToken() {
    localStorage.removeItem('token');
    this.jwtPayLoad = null;
  }

  public novoCliente(cliente: Cliente): Promise<Cliente> {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post(`${this.clientesURL}`, JSON.stringify(cliente), { headers }).toPromise()
    .then(response => response.json());
  }
}
