import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagina-barra',
  templateUrl: './pagina-barra.component.html',
  styleUrls: ['./pagina-barra.component.css']
})
export class PaginaBarraComponent implements OnInit {

public menu: boolean;

  constructor() { }

  ngOnInit() {
  }

  abrirMenu() {
    this.menu = true;
  }

  fecharMenu() {
    this.menu = false;
  }
}
