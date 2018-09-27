import { Component, OnInit } from '@angular/core';
import { InicioService } from '../shared/service/inicio.service';
import { ToastyService } from 'ng2-toasty';
import { Produto } from '../../produtos/shared/model/Produto.model';

@Component({
  selector: 'app-pagina-inicial',
  templateUrl: './pagina-inicial.component.html',
  styleUrls: ['./pagina-inicial.component.css']
})
export class PaginaInicialComponent implements OnInit {

  public produtos: Produto[];

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
    })
    .catch(erro => {
      this.toastyService.clearAll();
      this.toastyService.error('Problemas técnicos ao buscar produtos da Loja! Tente novamente...');
    });
  }

}
