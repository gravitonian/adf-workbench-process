import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyTasksPageComponent } from './my-tasks-page/my-tasks-page.component';
import { MyTasksListPageComponent } from './my-tasks-list-page/my-tasks-list-page.component';
import { MyTasksDetailsPageComponent } from './my-tasks-details-page/my-tasks-details-page.component';

import { AuthGuardBpm } from 'ng2-alfresco-core';

const routes: Routes = [ {
  path: 'my-tasks',
  component: MyTasksPageComponent,
  canActivate: [AuthGuardBpm],
  data: {
    title: 'My Tasks',
    icon: 'assignment',
    hidden: false,
    needBpmAuth: true,
    isLogin: false
  },
  children: [
    { path: '', component: MyTasksListPageComponent, canActivate: [AuthGuardBpm] },
    { path: ':task-id', component: MyTasksDetailsPageComponent, canActivate: [AuthGuardBpm] }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyTasksRoutingModule { }
