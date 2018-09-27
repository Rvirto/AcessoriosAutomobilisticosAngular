import { FornecedorService } from './../../fornecedores/shared/service/fornecedor.service';
import { ServicosService } from './../../servicos/shared/service/servicos.service';
import { ConfirmationService } from 'primeng/components/common/confirmationservice';
import { ToastyService } from 'ng2-toasty';
import { Fornecedor } from './../../fornecedores/shared/model/fornecedor.model';
import { Servico } from './../../servicos/shared/model/Servico.model';
import { Component, OnInit } from '@angular/core';
import { Produto } from '../shared/model/Produto.model';
import { ProdutoService } from '../shared/service/produto.service';

@Component({
  selector: 'app-pagina-produtos',
  templateUrl: './pagina-produtos.component.html',
  styleUrls: ['./pagina-produtos.component.css']
})
export class PaginaProdutosComponent implements OnInit {

  public produtos: Produto[];
  public servicos = [];
  public fornecedores = [];
  public novoProduto: Produto = new Produto();
  public dialogNovoProduto: boolean;
  public dialogEditarProduto: boolean;
  public produtoSelecionado: Produto = new Produto();
  public dialogNovoServico: boolean;
  public dialogNovoFornecedor: boolean;
  public novoFornecedor: Fornecedor = new Fornecedor();
  public novoServico: Servico = new Servico();

  constructor(
    private produtoService: ProdutoService,
    private toastyService: ToastyService,
    private confirmacaoService: ConfirmationService,
    private servicoService: ServicosService,
    private fornecedorService: FornecedorService
  ) { }

  ngOnInit() {
    this.carregarProdutos();
    this.carregarFornecedores();
    this.carregarServicos();
  }

  public carregarProdutos(): void {
    this.produtoService.buscarProdutos()
    .then(response => {
      this.produtos = response;
    })
    .catch(erro => {
      this.toastyService.clearAll();
      this.toastyService.error('Problemas técnicos ao buscar Produtos! Tente novamente...');
    });
  }

  public carregarFornecedores(): void {
    this.produtoService.listarFornecedores()
    .then(response => {
      this.fornecedores = response.map(forne => {
        return {label: forne.nome, value: forne.id};
      });
    })
    .catch(erro => {
      this.toastyService.clearAll();
      this.toastyService.error('Problemas Técnicos! Tente novamente...');
    });
  }

  public carregarServicos(): void {
    this.produtoService.buscarServico()
    .then(response => {
      this.servicos = response.map(serv => {
        return {label: serv.descricao, value: serv.id};
      });
    })
    .catch(erro => {
      this.toastyService.clearAll();
      this.toastyService.error('Problemas Técnicos! Tente novamente...');
    });
  }

  public abrirDialogNovoProduto(): void {
    this.dialogNovoProduto = true;
  }

  public abrirDialogEditarProduto(prod: Produto): void {
    this.dialogEditarProduto = true;
    this.produtoSelecionado = prod;
  }

  public fechar(): void {
    this.dialogEditarProduto = false;
    this.dialogNovoProduto = false;
    this.novoProduto = new Produto();
    this.carregarProdutos();
  }

  public salvarProduto(): void {
    this.produtoService.adicionarProduto(this.novoProduto)
    .then(response => {
      this.toastyService.clearAll();
      this.toastyService.success('Produto foi adicionado com sucesso!');
      this.fechar();
    })
    .catch(erro => {
      this.fechar();
      this.toastyService.clearAll();
      this.toastyService.error('Problemas técnicos ao adicionar novo produto! Tente novamente...');
    });
  }

  public editarProduto() {
    this.produtoService.atualizarProduto(this.produtoSelecionado)
    .then(response => {
      this.toastyService.clearAll();
      this.toastyService.success('Produto foi atualizado com sucesso!');
      this.fechar();
    })
    .catch(erro => {
      this.fechar();
      this.toastyService.clearAll();
      this.toastyService.error('Problemas técnicos ao atualizar produto! Tente novamente...');
    });
  }

  public confirmarExclusao(id: number) {
    this.confirmacaoService.confirm({
      message: 'Tem certeza que deseja excluir?',
      accept: () => {
        this.excluirProduto(id);
      }
    });
  }

   public excluirProduto(id: number) {
    this.produtoService.excluirProduto(id).then(() => {
      this.toastyService.clearAll();
      this.toastyService.success('Produto excluído com sucesso!'),
      this.fechar();
    })
    .catch(erro => {
      this.toastyService.clearAll();
      this.toastyService.error('Não foi possível excluir este produto!');
    });
  }

  public abrirDialogNovoServico() {
    this.dialogNovoServico = true;
  }

  public fecharServico() {
    this.dialogNovoServico = false;
    this.novoServico = new Servico();
  }

  public abrirDialogNovoFornecedor() {
    this.dialogNovoFornecedor = true;
  }

  public fecharFornecedor() {
    this.dialogNovoFornecedor = false;
    this.novoFornecedor = new Fornecedor();
  }

  public salvarServico() {
    this.servicoService.adicionarServico(this.novoServico)
    .then(response => {
      this.carregarServicos();
      this.toastyService.clearAll();
      this.toastyService.success('Serviço Adicionado com Sucesso!');
      this.fecharServico();
    })
    .catch(erro => {
      this.toastyService.clearAll();
      this.toastyService.error('Problemas técnicos ao adicionar Serviço! Tente novamente...');
    });
  }

  public salvarFornecedor() {
    this.fornecedorService.novoFornecedor(this.novoFornecedor)
    .then(response => {
      this.carregarFornecedores();
      this.toastyService.clearAll();
      this.toastyService.success('Fornecedor Adicionado com Sucesso!');
      this.fecharFornecedor();
    })
    .catch(erro => {
      this.toastyService.clearAll();
      this.toastyService.error('Problemas técnicos ao adicionar Fornecedor! Tente novamente...');
    });
  }
}
