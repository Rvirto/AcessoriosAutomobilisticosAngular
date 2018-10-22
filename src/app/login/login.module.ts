import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicialLoginComponent } from './inicial-login/inicial-login.component';
import { LoginService } from './shared/service/login.service';
import { LogoutService } from './shared/service/logout.service';
import { HttpModule, RequestOptions, Http } from '@angular/http';
import { AuthHttp, AuthConfig } from 'angular2-jwt';

export function authHttpServiceFactory(http: Http, options: RequestOptions) {
  return new AuthHttp(new AuthConfig(), http, options);
}

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpModule
  ],
  declarations: [InicialLoginComponent],
  exports: [InicialLoginComponent],
  providers: [
    LoginService,
    LogoutService,
  {
    provide: AuthHttp,
    useFactory: authHttpServiceFactory,
    deps: [Http, RequestOptions]
  }]
})
export class LoginModule { }
