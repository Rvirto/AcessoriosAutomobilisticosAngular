import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicialOrcamentoComponent } from './inicial-orcamento/inicial-orcamento.component';
import { OrcamentoService } from './shared/service/orcamento.service';
import { MeusOrcamentosComponent } from './meus-orcamentos/meus-orcamentos.component';
import { DataTableModule } from 'primeng/components/datatable/datatable';
import { TodosOrcamentosComponent } from './todos-orcamentos/todos-orcamentos.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    DataTableModule
  ],
  declarations: [InicialOrcamentoComponent, MeusOrcamentosComponent, TodosOrcamentosComponent],
  providers: [OrcamentoService],
  exports: [InicialOrcamentoComponent, MeusOrcamentosComponent, TodosOrcamentosComponent]
})
export class OrcamentoModule { }
