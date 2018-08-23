import { FornecedoresModule } from './fornecedores/fornecedores.module';
import { FuncionarioModule } from './funcionarios/funcionario.module';
import { ToastyModule } from 'ng2-toasty';
import { ClienteModule } from './clientes/cliente/cliente.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ConfirmDialogModule } from 'primeng/components/confirmdialog/confirmdialog';
import { ConfirmationService } from 'primeng/components/common/confirmationservice';


import { AppComponent } from './app.component';


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
    FornecedoresModule
  ],
  providers: [ConfirmationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
