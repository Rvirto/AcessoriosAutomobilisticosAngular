import { InicioService } from './../../inicio/shared/service/inicio.service';
import { ActivatedRoute } from '@angular/router';
import { Orcamento } from './../shared/model/Orcamento.model';
import { Component, OnInit } from '@angular/core';
import { OrcamentoService } from '../shared/service/orcamento.service';
import { ToastyService } from 'ng2-toasty';

@Component({
  selector: 'app-inicial-orcamento',
  templateUrl: './inicial-orcamento.component.html',
  styleUrls: ['./inicial-orcamento.component.css']
})
export class InicialOrcamentoComponent implements OnInit {

  public orcamento: Orcamento = new Orcamento();

  constructor(
    private orcamentoService: OrcamentoService,
    private toastyService: ToastyService,
    private route: ActivatedRoute,
    private inicioService: InicioService
  ) { }

  ngOnInit() {
    this.buscarOrcamento();
  }

  public buscarOrcamento(): void {
    this.orcamentoService.buscarOrcamento(this.route.snapshot.params['id'])
    .then(response => {
      this.orcamento = response;
      this.toastyService.clearAll();
      this.toastyService.success('O seu Orçamento está pronto!');
      this.buscarImagem();
    })
    .catch(() => {
      this.toastyService.clearAll();
      this.toastyService.error('Problemas técnicos ao buscar seu Orçamento! Tente novamente...');
    });
  }

  public buscarImagem() {
    for (let i = 0; i < this.orcamento.produtos.length; i++) {
      this.inicioService.buscarImagemPeloProduto(this.orcamento.produtos[i].id)
      .then(response => {
        this.orcamento.produtos[i].imagem = response[0].nome;
      });
    }
  }
}
