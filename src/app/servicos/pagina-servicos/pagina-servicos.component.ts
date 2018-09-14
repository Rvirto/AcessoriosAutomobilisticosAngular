import { ToastyService } from 'ng2-toasty';
import { Component, OnInit } from '@angular/core';
import { ServicosService } from '../shared/service/servicos.service';
import { Servico } from '../shared/model/Servico.model';
import { ConfirmationService } from 'primeng/components/common/confirmationservice';

@Component({
  selector: 'app-pagina-servicos',
  templateUrl: './pagina-servicos.component.html',
  styleUrls: ['./pagina-servicos.component.css']
})
export class PaginaServicosComponent implements OnInit {

  public servicos: Servico[];
  public novoServico: Servico = new Servico();
  public servicoSelecionado: Servico;
  public dialogNovoServico: boolean;
  public dialogAlterarServico: boolean;

  constructor(
    private servicoService: ServicosService,
    private toastyService: ToastyService,
    private confirmacaoService: ConfirmationService
  ) { }

  ngOnInit() {
    this.carregarServicos();
  }

  public carregarServicos(): void {
    this.servicoService.buscarServico()
    .then(response => {
      this.servicos = response;
    })
    .catch(erro => {
      this.toastyService.clearAll();
      this.toastyService.error('Problemas técnicos ao buscar serviços cadastrados!');
    });
  }

  public adicionarServico(): void {
    this.servicoService.adicionarServico(this.novoServico)
    .then(response => {
      this.toastyService.clearAll();
      this.toastyService.success('Novo serviço cadastrado no sistema!');
      this.fechar();
    })
    .catch(erro => {
      this.toastyService.clearAll();
      this.toastyService.error('Problemas técnicos ao cadastrar novo serviço!');
    });
  }

  public alterarServico(): void {
    this.servicoService.atualizarServico(this.servicoSelecionado)
    .then(response => {
      this.toastyService.clearAll();
      this.toastyService.success('Serviço alterado com sucesso!');
      this.fechar();
    })
    .catch(erro => {
      this.toastyService.clearAll();
      this.toastyService.error('Problemas técnicos ao alterar novo serviço!');
    });
  }

  public abrirDialogNovoServico(): void {
    this.dialogNovoServico = true;
  }

  public abrirDialogEditarServico(servico: Servico): void {
    this.servicoSelecionado = servico;
    this.dialogAlterarServico = true;
  }

  public fechar(): void {
    this.dialogNovoServico = false;
    this.dialogAlterarServico = false;
    this.novoServico = new Servico();
    this.carregarServicos();
  }

  public confirmarExclusao(id: number): void {
    this.confirmacaoService.confirm({
      message: 'Tem certeza que deseja excluir?',
      accept: () => {
        this.excluirServico(id);
      }
    });
  }

  public excluirServico(id: number): void {
    this.servicoService.removerServico(id)
    .then(response => {
      if (response == null) {
          this.toastyService.clearAll();
          this.toastyService.success('Serviço excluído com sucesso!');
          this.carregarServicos();
      }
    })
    .catch(erro => {
      this.toastyService.clearAll();
      this.toastyService.error('Problemas técnicos ao excluir Serviço!');
    });
}

}
