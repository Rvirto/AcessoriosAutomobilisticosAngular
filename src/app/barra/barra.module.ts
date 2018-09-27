import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginaBarraComponent } from './pagina-barra/pagina-barra.component';
import {SidebarModule} from 'primeng/sidebar';
import { CollapseModule, BsDropdownModule } from 'ngx-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    SidebarModule,
    RouterModule,
    CollapseModule.forRoot(),
     BsDropdownModule.forRoot()
  ],
  declarations: [PaginaBarraComponent],
  exports: [PaginaBarraComponent]
})
export class BarraModule { }
