import { Router } from '@angular/router';
import { LoginService } from './../shared/service/login.service';
import { Component, OnInit } from '@angular/core';
import { ToastyService } from 'ng2-toasty';

@Component({
  selector: 'app-inicial-login',
  templateUrl: './inicial-login.component.html',
  styleUrls: ['./inicial-login.component.css']
})
export class InicialLoginComponent implements OnInit {

  public email: string;
  public senha: string;

  constructor(
    private loginService: LoginService,
    private toastyService: ToastyService,
    private router: Router
  ) { }

  ngOnInit() {
  }


  public fazerLogin(): void {
    this.loginService.login(this.email, this.senha)
    .then(() => {
      this.toastyService.clearAll();
      this.toastyService.success('Bem vindo a Virtus Acessórios Automobilísticos!');
      this.router.navigate(['/']);
      this.loginService.carregarToken();
    })
    .catch(erro => {
    this.toastyService.clearAll();
    this.toastyService.error('E-mail e Senha podem estar incorretos!');
    });
  }
}
