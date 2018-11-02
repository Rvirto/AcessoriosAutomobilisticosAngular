import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginaInicialComponent } from './pagina-inicial/pagina-inicial.component';
import { InicioService } from './shared/service/inicio.service';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { VerProdutoComponent } from './ver-produto/ver-produto.component';
import {GalleriaModule} from 'primeng/components/galleria/galleria';
import {SpinnerModule} from 'primeng/components/spinner/spinner';

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    FormsModule,
    RouterModule,
    GalleriaModule,
    SpinnerModule
  ],
  declarations: [PaginaInicialComponent, VerProdutoComponent],
  exports: [PaginaInicialComponent, VerProdutoComponent],
  providers: [InicioService]
})
export class InicioModule { }
