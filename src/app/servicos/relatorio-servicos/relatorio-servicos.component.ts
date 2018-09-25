import { ServicosService } from './../shared/service/servicos.service';
import { Component, OnInit } from '@angular/core';
import { Servico } from '../shared/model/Servico.model';
import { ToastyService } from 'ng2-toasty';

@Component({
  selector: 'app-relatorio-servicos',
  templateUrl: './relatorio-servicos.component.html',
  styleUrls: ['./relatorio-servicos.component.css']
})
export class RelatorioServicosComponent implements OnInit {

  public servicos: Servico[];

  constructor(
    private servicoService: ServicosService,
    private toastyService: ToastyService
  ) { }

  ngOnInit() {
    this.carregarServicos();
  }

  public carregarServicos(): void {
    this.servicoService.buscarServico()
    .then(response => {
      this.servicos = response;
    })
    .catch(erro => {
      this.toastyService.clearAll();
      this.toastyService.error('Problemas técnicos ao gerar Relatório de Serviços! Tente novamente...');
    });
  }
}
