import { Http, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';
import { Imagem } from '../../../produtos/shared/model/Imagem.model';
import { ProdutoImagem } from '../../../produtos/shared/model/ProdutoImagem.mode';
import { Produto } from '../../../produtos/shared/model/Produto.model';
import { Carrinho } from '../../../carrinho/shared/model/Carrinho.model';

@Injectable()
export class InicioService {

  private produtosURL = 'http://localhost:8080/produtos';
  private imagemURL = 'http://localhost:8080/imagens';

  constructor(
    private http: Http
      ) { }

  public buscarProdutos(): Promise<ProdutoImagem[]> {
    return this.http.get(`${this.produtosURL}`)
    .toPromise()
    .then(response => response.json());
  }

  public buscarImagemPeloProduto(id: number): Promise<Imagem[]> {
    return this.http.get(`${this.imagemURL}/${id}`)
    .toPromise()
    .then(response => response.json());
  }

  public buscarProdutoId(id: number): Promise<Produto> {
    return this.http.get(`${this.produtosURL}/${id}`)
    .toPromise()
    .then(response => response.json());
    }
}
