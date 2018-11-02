import { Component, OnInit } from '@angular/core';
import { InicioService } from '../shared/service/inicio.service';
import { ToastyService } from 'ng2-toasty';
import { ProdutoImagem } from '../../produtos/shared/model/ProdutoImagem.mode';

@Component({
  selector: 'app-pagina-inicial',
  templateUrl: './pagina-inicial.component.html',
  styleUrls: ['./pagina-inicial.component.css']
})
export class PaginaInicialComponent implements OnInit {

  public produtos: ProdutoImagem[];

  constructor(
    private inicioService: InicioService,
    private toastyService: ToastyService
  ) { }

  ngOnInit() {
    this.buscaProduto();
  }

  public buscaProduto() {
    this.inicioService.buscarProdutos()
    .then(response => {
      this.produtos = response;
      this.buscarImagem();
    })
    .catch(erro => {
      this.toastyService.clearAll();
      this.toastyService.error('Problemas técnicos ao buscar produtos da Loja! Tente novamente...');
    });
  }

  public buscarImagem() {
    for (let i = 0; i < this.produtos.length; i++) {
      this.inicioService.buscarImagemPeloProduto(this.produtos[i].id)
      .then(response => {
        this.produtos[i].imagem = response[0].nome;
      });
    }
  }
}
