import { Router } from '@angular/router';
import { InicioService } from './../../inicio/shared/service/inicio.service';
import { ToastyService } from 'ng2-toasty';
import { CarrinhoService } from './../shared/service/carrinho.service';
import { Carrinho } from './../shared/model/Carrinho.model';
import { Component, OnInit } from '@angular/core';
import { ProdutoCarrinho } from '../shared/model/ProdutoCarrinho.model';
import { OrcamentoService } from '../../orcamento/shared/service/orcamento.service';
import { LoginService } from '../../login/shared/service/login.service';
import { Orcamento } from '../../orcamento/shared/model/Orcamento.model';

@Component({
  selector: 'app-pagina-carrinho',
  templateUrl: './pagina-carrinho.component.html',
  styleUrls: ['./pagina-carrinho.component.css']
})
export class PaginaCarrinhoComponent implements OnInit {

  public carrinho: Carrinho = new Carrinho();
  public produtos: ProdutoCarrinho[];
  public totalProdutos: number;
  public temProduto: boolean;
  private orcamento: Orcamento = new Orcamento();

  constructor(
    private carrinhoService: CarrinhoService,
    private toastyService: ToastyService,
    private inicioService: InicioService,
    private router: Router,
    private orcamentoService: OrcamentoService,
    private loginService: LoginService
  ) { }

  ngOnInit() {
    this.buscarProdutos();
  }

  public buscarProdutos(): void {
    this.carrinhoService.buscarProdutosDoCarrinho()
    .then(response => {
      this.carrinho = response;
      this.produtos = this.carrinho.produtoCarrinho;
      if (this.produtos.length === 0) {
        this.temProduto = false;
      } else {
        this.temProduto = true;
      }
      this.totalProdutos = 0;
      for (let i = 0; i < this.produtos.length; i++) {
        this.totalProdutos += this.produtos[i].valorVenda;
      }
      this.buscarImagem();
    });
  }

  public buscarImagem() {
    for (let i = 0; i < this.produtos.length; i++) {
      this.inicioService.buscarImagemPeloProduto(this.produtos[i].produto.id)
      .then(response => {
        this.produtos[i].produto.imagem = response[0].nome;
      });
    }
  }

  public mudarValor(produto: ProdutoCarrinho) {
    this.totalProdutos -= produto.valorVenda;
    produto.valorVenda = produto.quantidade * produto.produto.precoVenda;
    this.totalProdutos += produto.valorVenda;
  }

  public removerProdutoCarrinho(produto: ProdutoCarrinho) {
    this.carrinhoService
    .removerProdutoDoCarrinho(this.carrinho.id, produto.produto.id)
    .then(() => {
      this.toastyService.clearAll();
      this.toastyService.success('Produto removido com sucesso!');
      this.buscarProdutos();
    })
    .catch(() => {
      this.toastyService.clearAll();
      this.toastyService.error('Problemas técnicos ao remover produto do Carrinho!');
    });
  }

  public fazerOrcamento() {
    this.orcamento.cliente.id = this.loginService.jwtPayLoad.idCli;
    this.orcamento.produtosCarrinho = this.produtos;
    this.orcamentoService.fazerOrcamento(this.orcamento)
    .then(response => {
      this.orcamento = response;
      this.toastyService.clearAll();
      this.toastyService.success('Orçamento realizado com sucesso!');
      this.router.navigate(['/orcamento', this.orcamento.id]);
    })
    .catch(() => {
      this.toastyService.clearAll();
      this.toastyService.error('Problemas técnicos ao fazer Orçamento! Tente novamente...');
    });
  }
}
