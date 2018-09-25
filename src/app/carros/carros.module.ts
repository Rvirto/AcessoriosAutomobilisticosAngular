import { InputMaskModule } from 'primeng/components/inputmask/inputmask';
import { FormsModule } from '@angular/forms';
import { DialogModule } from 'primeng/components/dialog/dialog';
import { InputTextModule } from 'primeng/components/inputtext/inputtext';
import { DataTableModule } from 'primeng/components/datatable/datatable';
import { CarroService } from './shared/service/carro.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginaCarrosComponent } from './pagina-carros/pagina-carros.component';
import { HttpModule } from '@angular/http';
import {DropdownModule} from 'primeng/components/dropdown/dropdown';
import { RelatorioCarrosComponent } from './relatorio-carros/relatorio-carros.component';

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    DataTableModule,
    DropdownModule,
    InputTextModule,
    DialogModule,
    FormsModule,
    InputMaskModule
  ],
  declarations: [PaginaCarrosComponent, RelatorioCarrosComponent],
  providers: [CarroService],
  exports: [PaginaCarrosComponent, RelatorioCarrosComponent]
})
export class CarrosModule { }
