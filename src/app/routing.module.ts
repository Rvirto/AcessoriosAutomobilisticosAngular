import { InicialLoginComponent } from './login/inicial-login/inicial-login.component';
import { SobreComponent } from './sobre/sobre/sobre.component';
import { ClienteComponent } from './clientes/cliente/cliente.component';
import { PaginaFornecedoresComponent } from './fornecedores/pagina-fornecedores/pagina-fornecedores.component';
import { PaginaCarrosComponent } from './carros/pagina-carros/pagina-carros.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PaginaFuncionarioComponent } from './funcionarios/pagina-funcionario/pagina-funcionario.component';
import { PaginaServicosComponent } from './servicos/pagina-servicos/pagina-servicos.component';
import { PaginaProdutosComponent } from './produtos/pagina-produtos/pagina-produtos.component';
import { RelatorioCarrosComponent } from './carros/relatorio-carros/relatorio-carros.component';
import { RelatorioClientesComponent } from './clientes/relatorio-clientes/relatorio-clientes.component';
import { RelatorioFornecedoresComponent } from './fornecedores/relatorio-fornecedores/relatorio-fornecedores.component';
import { RelatorioFuncionariosComponent } from './funcionarios/relatorio-funcionarios/relatorio-funcionarios.component';
import { RelatorioProdutosComponent } from './produtos/relatorio-produtos/relatorio-produtos.component';
import { RelatorioServicosComponent } from './servicos/relatorio-servicos/relatorio-servicos.component';
import { PaginaInicialComponent } from './inicio/pagina-inicial/pagina-inicial.component';
import { VerProdutoComponent } from './inicio/ver-produto/ver-produto.component';
import { PaginaCarrinhoComponent } from './carrinho/pagina-carrinho/pagina-carrinho.component';
import { InicialOrcamentoComponent } from './orcamento/inicial-orcamento/inicial-orcamento.component';

const routes: Routes = [

  {path: '', component: PaginaInicialComponent},
  {path: 'carros', component: PaginaCarrosComponent},
  {path: 'fornecedores', component: PaginaFornecedoresComponent},
  {path: 'clientes', component: ClienteComponent},
  {path: 'funcionarios', component: PaginaFuncionarioComponent},
  {path: 'produtos', component: PaginaProdutosComponent},
  {path: 'servicos', component: PaginaServicosComponent},
  {path: 'relatorioCarros', component: RelatorioCarrosComponent},
  {path: 'relatorioClientes', component: RelatorioClientesComponent},
  {path: 'relatorioFornecedores', component: RelatorioFornecedoresComponent},
  {path: 'relatorioFuncionarios', component: RelatorioFuncionariosComponent},
  {path: 'relatorioProdutos', component: RelatorioProdutosComponent},
  {path: 'relatorioServicos', component: RelatorioServicosComponent},
  {path: 'sobre', component: SobreComponent},
  {path: 'produto/:id', component: VerProdutoComponent},
  {path: 'carrinho', component: PaginaCarrinhoComponent},
  {path: 'login', component: InicialLoginComponent},
  {path: 'orcamento/:id', component: InicialOrcamentoComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})

export class RoutingModule {}
