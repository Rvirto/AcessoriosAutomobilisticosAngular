import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicialOrcamentoComponent } from './inicial-orcamento/inicial-orcamento.component';
import { OrcamentoService } from './shared/service/orcamento.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpModule
  ],
  declarations: [InicialOrcamentoComponent],
  providers: [OrcamentoService],
  exports: [InicialOrcamentoComponent]
})
export class OrcamentoModule { }
