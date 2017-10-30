import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyProcessesListPageComponent } from './my-processes-list-page/my-processes-list-page.component';
import { MyProcessesPageComponent } from './my-processes-page/my-processes-page.component';
import { MyProcessesDetailsPageComponent } from './my-processes-details-page/my-processes-details-page.component';

import { AuthGuardBpm } from 'ng2-alfresco-core';

const routes: Routes = [{
  path: 'my-processes',
  component: MyProcessesPageComponent,
  canActivate: [AuthGuardBpm],
  data: {
    title: 'My Processes',
    icon: 'settings',
    hidden: false,
    needBpmAuth: true,
    isLogin: false
  },
  children: [
    { path: '', component: MyProcessesListPageComponent, canActivate: [AuthGuardBpm] },
    { path: ':process-id', component: MyProcessesDetailsPageComponent, canActivate: [AuthGuardBpm] }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyProcessesRoutingModule { }
