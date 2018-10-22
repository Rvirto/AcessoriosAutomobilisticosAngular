import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginaCarrinhoComponent } from './pagina-carrinho/pagina-carrinho.component';
import { CarrinhoService } from './shared/service/carrinho.service';

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    FormsModule,
    BrowserModule
  ],
  declarations: [PaginaCarrinhoComponent],
  exports: [PaginaCarrinhoComponent],
  providers: [CarrinhoService]
})
export class CarrinhoModule { }
