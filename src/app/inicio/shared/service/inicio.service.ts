import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';
import { Produto } from '../../../produtos/shared/model/Produto.model';

@Injectable()
export class InicioService {

  private produtosURL = 'http://localhost:8080/produtos';

  constructor(
    private http: Http
      ) { }

  public buscarProdutos(): Promise<Produto[]> {
    return this.http.get(`${this.produtosURL}`)
    .toPromise()
    .then(response => response.json());
  }
}
