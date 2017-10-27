import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppLoginPageComponent } from './app-login-page/app-login-page.component';

const routes: Routes = [{
  path: 'login',
  component: AppLoginPageComponent,
  data: {
    title: 'Login',
    icon: 'forward',

    hidden: false,
    isLogin: true
  }
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppLoginRoutingModule { }
