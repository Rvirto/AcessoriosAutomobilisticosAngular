import { ClienteService } from './../../clientes/shared/service/cliente.service';
import { Cliente } from './../shared/model/Cliente.model';
import { ToastyService } from 'ng2-toasty';
import { Carro } from './../shared/model/Carros.model';
import { Component, OnInit } from '@angular/core';
import { CarroService } from '../shared/service/carro.service';

@Component({
  selector: 'app-pagina-carros',
  templateUrl: './pagina-carros.component.html',
  styleUrls: ['./pagina-carros.component.css']
})
export class PaginaCarrosComponent implements OnInit {

  public carros: Carro[];
  public clientes = [];
  public novoCarro = new Carro();
  public carroSelecionado = new Carro();
  public dialogNovoCarro: boolean;
  public dialogEditarCarro: boolean;
  public dialogNovoCliente: boolean;
  public novoCliente: Cliente = new Cliente();
  public senhaCli: string;

  constructor(
    private carroService: CarroService,
    private toastyService: ToastyService,
    private clienteService: ClienteService
  ) { }

  ngOnInit() {
    this.carregarCarros();
    this.carregarClientes();
  }

  public carregarCarros() {
    this.carroService.buscarCarros()
    .then(response => {
      this.carros = response;
      console.log(this.carros);
    })
    .catch(erro => {
      this.toastyService.clearAll();
      this.toastyService.error('Problemas Técnicos! Tente novamente...');
    });
  }

  public carregarClientes() {
    this.carroService.buscarClientes()
    .then(response => {
      this.clientes = response.map(cli => {
        return {label: cli.nome, value: cli.id};
      });
    })
    .catch(erro => {
      this.toastyService.clearAll();
      this.toastyService.error('Problemas Técnicos! Tente novamente...');
    });
  }

  public abrirDialogNovoCarro() {
    this.dialogNovoCarro = true;
  }

  public abrirDialogEditarCarro(carro: Carro) {
    this.dialogEditarCarro = true;
    this.carroSelecionado = carro;
  }

  public fechar() {
    this.dialogEditarCarro = false;
    this.dialogNovoCarro = false;
    this.novoCarro = new Carro();
    this.carregarCarros();
  }

  public atualizaCarro() {
    this.carroService.atualizarCarro(this.carroSelecionado)
    .then(response => {
      this.toastyService.clearAll();
      this.toastyService.success('O carro foi atualizado com sucesso!');
      this.fechar();
      this.carregarCarros();
    })
    .catch(erro => {
      this.toastyService.clearAll();
      this.toastyService.error('Problemas técnicos ao atualizar o carro!');
    });
  }

  public salvarNovoCarro() {
    this.carroService.adicionarCarro(this.novoCarro)
    .then(response => {
      this.toastyService.clearAll();
      this.toastyService.success('Sucesso ao cadastrar novo Carro!');
      this.fechar();
      this.carregarCarros();
    })
    .catch(erro => {
      this.toastyService.clearAll();
      this.toastyService.error('Problemas técnicos ao salvar novo o carro!');
    });
  }

  public abrirDialogNovoCliente() {
    this.dialogNovoCliente = true;
  }

  public salvarCliente() {
    if (this.novoCliente.senha === this.senhaCli) {
      this.clienteService.novoCliente(this.novoCliente)
      .then(response => {
        this.carregarClientes();
        this.toastyService.clearAll();
        this.toastyService.success('Cliente Adicionado com Sucesso!');
        this.fecharCliente();
      })
      .catch(erro => {
        this.toastyService.clearAll();
        this.toastyService.error('Problemas técnicos ao adicionar Cliente! Tente novamente...');
      });
    } else {
      this.toastyService.clearAll();
      this.toastyService.warning('As senhas não conferem, por favor tente novamente!');
    }
  }

  public fecharCliente() {
    this.dialogNovoCliente = false;
    this.novoCliente = new Cliente();
  }

}
