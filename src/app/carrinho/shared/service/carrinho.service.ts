import { LoginService } from './../../../login/shared/service/login.service';
import { Carrinho } from './../model/Carrinho.model';
import { AuthHttp } from 'angular2-jwt';
import { Injectable } from '@angular/core';
import { Headers } from '@angular/http';
import { Produto } from '../../../produtos/shared/model/Produto.model';

@Injectable()
export class CarrinhoService {

  private carrinhoURL = 'http://localhost:8080/carrinho';

  constructor(
    private http: AuthHttp,
    private loginService: LoginService
  ) { }

  public adicionarCarrinho(idUsuario: number, produto: Produto): Promise<Carrinho> {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.put(`${this.carrinhoURL}/adicionar/${idUsuario}`,
     JSON.stringify(produto), { headers })
    .toPromise()
    .then(() => null);
  }

  public removerProdutoDoCarrinho(idCarrinho: number, idProduto: number): Promise<void> {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.put(`${this.carrinhoURL}/remover/${idCarrinho}/${idProduto}`,
     { headers })
    .toPromise()
    .then(() => null);
  }

  public buscarProdutosDoCarrinho(): Promise<Carrinho> {
    return this.http.get(`${this.carrinhoURL}/${this.loginService.jwtPayLoad.idCli}`)
    .toPromise()
    .then(response => response.json());
  }
}
