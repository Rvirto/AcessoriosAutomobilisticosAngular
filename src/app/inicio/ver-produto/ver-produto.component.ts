import { Carrinho } from './../../carrinho/shared/model/Carrinho.model';
import { InicioService } from './../shared/service/inicio.service';
import { ToastyService } from 'ng2-toasty';
import { Produto } from './../../produtos/shared/model/Produto.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from '../../login/shared/service/login.service';
import { CarrinhoService } from '../../carrinho/shared/service/carrinho.service';

@Component({
  selector: 'app-ver-produto',
  templateUrl: './ver-produto.component.html',
  styleUrls: ['./ver-produto.component.css']
})
export class VerProdutoComponent implements OnInit {

  public produto: Produto = new Produto();
  public imagens: any[] = [];
  public quantidadeProduto: number;
  public valorProduto: number;

  constructor(
    private route: ActivatedRoute,
    private toastyService: ToastyService,
    private router: Router,
    private inicioService: InicioService,
    private loginService: LoginService,
    private carrinhoService: CarrinhoService
  ) { }

  ngOnInit() {
    this.quantidadeProduto = 1;
    this.buscaProdutoId();
  }

  public mudaQuantidade() {
    this.multiplica();
  }
  public multiplica() {
     this.valorProduto = this.produto.precoVenda * this.quantidadeProduto;
  }

  public buscaProdutoId() {
    this.inicioService.buscarProdutoId(this.route.snapshot.params['id'])
    .then(response => {
      this.produto = response;
      this.buscarImagem();
      this.multiplica();
    })
    .catch(erro => {
      this.toastyService.clearAll();
      this.toastyService.error('Produto não encontrado! Tente novamente...');
      this.router.navigate(['']);
    });
  }

  public buscarImagem() {
      this.inicioService.buscarImagemPeloProduto(this.route.snapshot.params['id'])
      .then(response => {
        this.imagens = response.map(res => {
        return {source: `../../../assets/${res.nome}`, alt: '', title: ''};
      });
    });
  }

  public adicionarNoCarrinho() {
    if (this.loginService.taLogado) {
      this.produto.quantidade = this.quantidadeProduto;
      this.produto.precoVenda = this.valorProduto;
      this.carrinhoService
      .adicionarCarrinho(this.loginService.jwtPayLoad.idCli, this.produto)
      .then(response => {
          this.toastyService.clearAll();
          this.toastyService.success('Produto adicionado ao Carrinho com Sucesso!');
          this.router.navigate(['/carrinho']);
      })
      .catch(erro => {
        this.toastyService.clearAll();
        this.toastyService.error('Problemas técnicos ao adicionar Carrinho! Tente novamente...');
        this.router.navigate(['']);
      });
    } else {
      this.router.navigate(['/login']);
      this.toastyService.clearAll();
      this.toastyService.warning('Por favor faça Login para adicionar produtos no seu carrinho!');
    }
  }
}
