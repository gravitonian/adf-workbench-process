import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProcessAppsPageComponent } from './process-apps-page/process-apps-page.component';
import { ProcessAppsListPageComponent } from './process-apps-list-page/process-apps-list-page.component';
import { ProcessAppsDetailsPageComponent } from './process-apps-details-page/process-apps-details-page.component';
import { ProcessDefinitionsListPageComponent } from './process-definitions-list-page/process-definitions-list-page.component';
import { ProcessDefinitionsDetailsPageComponent } from './process-definitions-details-page/process-definitions-details-page.component';
import { StartProcessPageComponent } from './start-process-page/start-process-page.component';

import { AuthGuardBpm } from 'ng2-alfresco-core';

const routes: Routes = [ {
  path: 'process-apps',
  component: ProcessAppsPageComponent,
  canActivate: [AuthGuardBpm],
  data: {
    title: 'Process Apps',
    icon: 'apps',
    hidden: false,
    needBpmAuth: true,
    isLogin: false
  },
  children: [
    { path: '', component: ProcessAppsListPageComponent, canActivate: [AuthGuardBpm] },
    { path: ':process-app-id', component: ProcessAppsDetailsPageComponent, canActivate: [AuthGuardBpm] },
    { path: ':process-app-id/procdef-list', component: ProcessDefinitionsListPageComponent, canActivate: [AuthGuardBpm] },
    { path: ':process-app-id/procdef-details/:process-def-id', component: ProcessDefinitionsDetailsPageComponent, canActivate: [AuthGuardBpm] },
    { path: ':process-app-id/start-process', component: StartProcessPageComponent, canActivate: [AuthGuardBpm] }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProcessAppsRoutingModule { }
