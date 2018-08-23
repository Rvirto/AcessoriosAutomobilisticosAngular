import { ClienteService } from './../shared/service/cliente.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClienteComponent } from './cliente.component';
import { HttpModule } from '@angular/http';
import { DataTableModule } from 'primeng/components/datatable/datatable';
import { ButtonModule } from 'primeng/components/button/button';
import { TooltipModule } from 'primeng/components/tooltip/tooltip';
import { DialogModule } from 'primeng/components/dialog/dialog';
import { InputMaskModule } from 'primeng/components/inputmask/inputmask';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InputTextModule } from 'primeng/components/inputtext/inputtext';

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    DataTableModule,
    ButtonModule,
    TooltipModule,
    DialogModule,
    InputMaskModule,
    FormsModule,
    BrowserAnimationsModule,
    InputTextModule
  ],
  declarations: [ClienteComponent],
  providers: [ClienteService],
  exports: [ClienteComponent]
})
export class ClienteModule { }
