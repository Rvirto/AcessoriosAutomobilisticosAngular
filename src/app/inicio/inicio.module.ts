import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginaInicialComponent } from './pagina-inicial/pagina-inicial.component';
import { InicioService } from './shared/service/inicio.service';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    FormsModule
  ],
  declarations: [PaginaInicialComponent],
  exports: [PaginaInicialComponent],
  providers: [InicioService]
})
export class InicioModule { }
