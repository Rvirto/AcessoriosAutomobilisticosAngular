import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginaProdutosComponent } from './pagina-produtos/pagina-produtos.component';
import { ProdutoService } from './shared/service/produto.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    RouterModule
  ],
  declarations: [PaginaProdutosComponent],
  exports: [PaginaProdutosComponent],
  providers: [ProdutoService]
})
export class ProdutosModule { }
