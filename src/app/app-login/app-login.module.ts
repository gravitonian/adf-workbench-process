import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppLoginRoutingModule } from './app-login-routing.module';
import { AppLoginPageComponent } from './app-login-page/app-login-page.component';

import { AppCommonModule } from '../app-common/app-common.module';
import { LoginModule } from 'ng2-alfresco-login';

@NgModule({
  imports: [
    CommonModule,
    AppLoginRoutingModule,

    /* Common App imports (Angular Core and Material, ADF Core */
    AppCommonModule,

    /* ADF libs specific to this module */
    LoginModule
  ],
  declarations: [AppLoginPageComponent]
})
export class AppLoginModule { }
