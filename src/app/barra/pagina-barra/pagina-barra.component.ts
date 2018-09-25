import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagina-barra',
  templateUrl: './pagina-barra.component.html',
  styleUrls: ['./pagina-barra.component.css']
})
export class PaginaBarraComponent implements OnInit {

public menu: boolean;
public menuRelatorio: boolean;

  constructor() { }

  ngOnInit() {
  }

  public abrirMenu(): void {
    this.menu = true;
  }

  public fecharMenu(): void {
    this.menu = false;
  }

  public abrirMenuRelatorio(): void {
    this.menuRelatorio = true;
  }

  public fecharMenuRelatorio(): void {
    this.menuRelatorio = false;
  }
}
