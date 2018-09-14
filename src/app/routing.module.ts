import { ClienteComponent } from './clientes/cliente/cliente.component';
import { PaginaFornecedoresComponent } from './fornecedores/pagina-fornecedores/pagina-fornecedores.component';
import { PaginaCarrosComponent } from './carros/pagina-carros/pagina-carros.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PaginaFuncionarioComponent } from './funcionarios/pagina-funcionario/pagina-funcionario.component';
import { PaginaServicosComponent } from './servicos/pagina-servicos/pagina-servicos.component';
import { PaginaProdutosComponent } from './produtos/pagina-produtos/pagina-produtos.component';

const routes: Routes = [

  {path: 'carros', component: PaginaCarrosComponent},
  {path: 'fornecedores', component: PaginaFornecedoresComponent},
  {path: 'clientes', component: ClienteComponent},
  {path: 'funcionarios', component: PaginaFuncionarioComponent},
  {path: 'produtos', component: PaginaProdutosComponent},
  {path: 'servicos', component: PaginaServicosComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})

export class RoutingModule {}
