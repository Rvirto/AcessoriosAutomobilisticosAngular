import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginaBarraComponent } from './pagina-barra/pagina-barra.component';
import {SidebarModule} from 'primeng/sidebar';

@NgModule({
  imports: [
    CommonModule,
    SidebarModule,
    RouterModule
  ],
  declarations: [PaginaBarraComponent],
  exports: [PaginaBarraComponent]
})
export class BarraModule { }
