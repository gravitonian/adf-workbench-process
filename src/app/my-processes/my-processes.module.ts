import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyProcessesRoutingModule } from './my-processes-routing.module';
import { MyProcessesPageComponent } from './my-processes-page/my-processes-page.component';
import { MyProcessesListPageComponent } from './my-processes-list-page/my-processes-list-page.component';
import { MyProcessesDetailsPageComponent } from './my-processes-details-page/my-processes-details-page.component';

import { AppCommonModule } from '../app-common/app-common.module';

import { ActivitiProcessListModule } from 'ng2-activiti-processlist';
import { ActivitiTaskListModule } from 'ng2-activiti-tasklist';
import { DiagramsModule } from 'ng2-activiti-diagrams';

@NgModule({
  imports: [
    CommonModule,
    MyProcessesRoutingModule,

    /* Common App imports (Angular Core and Material, ADF Core */
    AppCommonModule,

    /* ADF libs specific to this module */
    ActivitiProcessListModule,
    ActivitiTaskListModule,
    DiagramsModule
  ],
  declarations: [MyProcessesPageComponent, MyProcessesListPageComponent, MyProcessesDetailsPageComponent]
})
export class MyProcessesModule { }
