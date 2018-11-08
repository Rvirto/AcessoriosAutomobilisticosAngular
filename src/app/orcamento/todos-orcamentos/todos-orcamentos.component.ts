import { ToastyService } from 'ng2-toasty';
import { OrcamentoService } from './../shared/service/orcamento.service';
import { Component, OnInit } from '@angular/core';
import { Orcamento } from '../shared/model/Orcamento.model';
import { Router } from '@angular/router';
import { ConfirmationService } from 'primeng/components/common/confirmationservice';

@Component({
  selector: 'app-todos-orcamentos',
  templateUrl: './todos-orcamentos.component.html',
  styleUrls: ['./todos-orcamentos.component.css']
})
export class TodosOrcamentosComponent implements OnInit {

  public orcamentos: Orcamento[] = [];

  constructor(
    private orcamentoService: OrcamentoService,
    private toastyService: ToastyService,
    private router: Router,
    private confirmacaoService: ConfirmationService
  ) { }

  ngOnInit() {
    this.buscarOrcamentos();
  }

  public buscarOrcamentos(): void {
    this.orcamentoService.buscarTodosOrcamentos()
    .then(response => {
      this.orcamentos = response;
    })
    .catch(() => {
      this.toastyService.clearAll();
      this.toastyService.error('Problemas técnicos ao buscar Orçamentos!');
    });
  }

  public detalhesOrcamento(id: number): void {
    this.router.navigate(['/orcamento', id]);
  }

  public confirmarExclusao(id: number) {
    this.confirmacaoService.confirm({
      message: 'Tem certeza que deseja excluir?',
      accept: () => {
        this.excluirOrcamento(id);
      }
    });
  }

  public excluirOrcamento(id: number) {
    this.orcamentoService.excluirOrcamento(id).then(() => {
      this.toastyService.clearAll();
      this.toastyService.success('Orçamento excluído com sucesso!'),
      this.buscarOrcamentos();
    })
    .catch(() => {
      this.toastyService.clearAll();
      this.toastyService.error('Não foi possível excluir este Orçamento!');
    });
  }
}
