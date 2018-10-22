import { ToastyService } from 'ng2-toasty';
import { Produto } from './../../produtos/shared/model/Produto.model';
import { ProdutoService } from './../../produtos/shared/service/produto.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-ver-produto',
  templateUrl: './ver-produto.component.html',
  styleUrls: ['./ver-produto.component.css']
})
export class VerProdutoComponent implements OnInit {

  public produto: Produto = new Produto();

  constructor(
    private route: ActivatedRoute,
    private produtoService: ProdutoService,
    private toastyService: ToastyService,
    private router: Router
  ) { }

  ngOnInit() {
    this.buscaProdutoId();
  }

  public buscaProdutoId() {
    this.produtoService.buscarProdutoId(this.route.snapshot.params['id'])
    .then(response => this.produto = response)
    .catch(erro => {
      this.toastyService.clearAll();
      this.toastyService.error('Produto não encontrado! Tente novamente...');
      this.router.navigate(['']);
    });
  }
}
