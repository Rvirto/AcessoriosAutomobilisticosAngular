import { InputMaskModule } from 'primeng/components/inputmask/inputmask';
import { CurrencyMaskModule } from 'ng2-currency-mask';
import { DialogModule } from 'primeng/components/dialog/dialog';
import { DataTableModule } from 'primeng/components/datatable/datatable';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginaProdutosComponent } from './pagina-produtos/pagina-produtos.component';
import { ProdutoService } from './shared/service/produto.service';
import { InputTextModule } from 'primeng/components/inputtext/inputtext';
import { DropdownModule } from 'primeng/components/dropdown/dropdown';
import { RelatorioProdutosComponent } from './relatorio-produtos/relatorio-produtos.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    RouterModule,
    DataTableModule,
    DialogModule,
    InputTextModule,
    CurrencyMaskModule,
    DropdownModule,
    InputMaskModule
  ],
  declarations: [PaginaProdutosComponent, RelatorioProdutosComponent],
  exports: [PaginaProdutosComponent, RelatorioProdutosComponent],
  providers: [ProdutoService]
})
export class ProdutosModule { }
