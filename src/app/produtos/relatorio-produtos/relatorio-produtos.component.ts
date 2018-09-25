import { ToastyService } from 'ng2-toasty';
import { ProdutoService } from './../shared/service/produto.service';
import { Produto } from './../shared/model/Produto.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-relatorio-produtos',
  templateUrl: './relatorio-produtos.component.html',
  styleUrls: ['./relatorio-produtos.component.css']
})
export class RelatorioProdutosComponent implements OnInit {

  public produtos: Produto[];

  constructor(
    private produtoService: ProdutoService,
    private toastyService: ToastyService
  ) { }

  ngOnInit() {
    this.carregarProdutos();
  }

  public carregarProdutos(): void {
    this.produtoService.buscarProdutos()
    .then(response => {
      this.produtos = response;
    })
    .catch(erro => {
      this.toastyService.clearAll();
      this.toastyService.error('Problemas técnicos ao gerar Relatório de Produtos! Tente novamente...');
    });
  }
}
