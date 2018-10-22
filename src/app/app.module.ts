import { SobreModule } from './sobre/sobre.module';
import { BarraModule } from './barra/barra.module';
import { CarrosModule } from './carros/carros.module';
import { FornecedoresModule } from './fornecedores/fornecedores.module';
import { FuncionarioModule } from './funcionarios/funcionario.module';
import { ToastyModule } from 'ng2-toasty';
import { ClienteModule } from './clientes/cliente.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ConfirmDialogModule } from 'primeng/components/confirmdialog/confirmdialog';
import { ConfirmationService } from 'primeng/components/common/confirmationservice';
import { ServicosModule } from './servicos/servicos.module';
import { ProdutosModule } from './produtos/produtos.module';
import { InicioModule } from './inicio/inicio.module';
import { CarrinhoModule } from './carrinho/carrinho.module';


import { AppComponent } from './app.component';
import { RoutingModule } from './routing.module';
import { LoginModule } from './login/login.module';
import { JwtHelper } from 'angular2-jwt';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ClienteModule,
    ToastyModule.forRoot(),
    FuncionarioModule,
    ConfirmDialogModule,
    FornecedoresModule,
    CarrosModule,
    BarraModule,
    RoutingModule,
    ServicosModule,
    ProdutosModule,
    SobreModule,
    InicioModule,
    CarrinhoModule,
    LoginModule
  ],
  providers: [
    ConfirmationService,
    JwtHelper],
  bootstrap: [AppComponent]
})
export class AppModule { }
