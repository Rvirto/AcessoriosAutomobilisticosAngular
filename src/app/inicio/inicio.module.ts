import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginaInicialComponent } from './pagina-inicial/pagina-inicial.component';
import { InicioService } from './shared/service/inicio.service';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { VerProdutoComponent } from './ver-produto/ver-produto.component';

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    FormsModule,
    RouterModule
  ],
  declarations: [PaginaInicialComponent, VerProdutoComponent],
  exports: [PaginaInicialComponent, VerProdutoComponent],
  providers: [InicioService]
})
export class InicioModule { }
