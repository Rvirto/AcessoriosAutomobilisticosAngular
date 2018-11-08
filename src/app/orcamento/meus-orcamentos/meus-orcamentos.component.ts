import { ConfirmationService } from 'primeng/components/common/confirmationservice';
import { LoginService } from './../../login/shared/service/login.service';
import { Orcamento } from './../shared/model/Orcamento.model';
import { Component, OnInit } from '@angular/core';
import { OrcamentoService } from '../shared/service/orcamento.service';
import { ToastyService } from 'ng2-toasty';
import { Router } from '@angular/router';

@Component({
  selector: 'app-meus-orcamentos',
  templateUrl: './meus-orcamentos.component.html',
  styleUrls: ['./meus-orcamentos.component.css']
})
export class MeusOrcamentosComponent implements OnInit {

  public orcamentos: Orcamento[] = [];

  constructor(
    private orcamentoService: OrcamentoService,
    private toastyService: ToastyService,
    private loginService: LoginService,
    private router: Router,
    private confirmacaoService: ConfirmationService
  ) { }

  ngOnInit() {
    this.buscarMeuOrcamentos();
  }

  public buscarMeuOrcamentos(): void {
    this.orcamentoService.buscarMeusOrcamentos(this.loginService.jwtPayLoad.idCli)
    .then(response => {
      this.orcamentos = response;
    })
    .catch(() => {
      this.toastyService.clearAll();
      this.toastyService.error('Problemas técnicos ao buscar seus Orçamentos! Tente novamente...');
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
      this.buscarMeuOrcamentos();
    })
    .catch(() => {
      this.toastyService.clearAll();
      this.toastyService.error('Não foi possível excluir este Orçamento!');
    });
  }
}
