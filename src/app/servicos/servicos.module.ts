import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginaServicosComponent } from './pagina-servicos/pagina-servicos.component';
import { HttpModule } from '@angular/http';
import { ServicosService } from './shared/service/servicos.service';
import { DataTableModule } from 'primeng/components/datatable/datatable';
import { DialogModule } from 'primeng/components/dialog/dialog';
import { InputTextModule } from 'primeng/components/inputtext/inputtext';
import { CurrencyMaskModule } from 'ng2-currency-mask';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    DataTableModule,
    DialogModule,
    InputTextModule,
    CurrencyMaskModule
  ],
  declarations: [PaginaServicosComponent],
  exports: [PaginaServicosComponent],
  providers: [ServicosService]
})
export class ServicosModule { }
