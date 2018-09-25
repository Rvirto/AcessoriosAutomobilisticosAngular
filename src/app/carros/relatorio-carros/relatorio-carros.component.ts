import { CarroService } from './../shared/service/carro.service';
import { Component, OnInit } from '@angular/core';
import { Carro } from '../shared/model/Carros.model';
import { ToastyService } from 'ng2-toasty';

@Component({
  selector: 'app-relatorio-carros',
  templateUrl: './relatorio-carros.component.html',
  styleUrls: ['./relatorio-carros.component.css']
})
export class RelatorioCarrosComponent implements OnInit {

  public carros: Carro[];

  constructor(
    private carroService: CarroService,
    private toastyService: ToastyService
  ) { }

  ngOnInit() {
    this.carregarCarros();
  }

  public carregarCarros() {
    this.carroService.buscarCarros()
    .then(response => {
      this.carros = response;
    })
    .catch(erro => {
      this.toastyService.clearAll();
      this.toastyService.error('Problemas técnicos ao buscar Carros! Tente novamente...');
    });
  }
}
