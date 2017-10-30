import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AppDefinitionRepresentationModel } from 'ng2-activiti-tasklist';

@Component({
  selector: 'app-my-processes-list-page',
  templateUrl: './my-processes-list-page.component.html',
  styleUrls: ['./my-processes-list-page.component.css']
})
export class MyProcessesListPageComponent implements OnInit {
  appId: number;
  appName: string;
  processTypeName: string;
  processState: string;

  /* Create a filter that will exclude the Task List App and include only new custom apps */
  processAppsFilter = [ { tenantId: 1 } ];

  constructor(private router: Router) {
    this.processTypeName = 'Running';
    this.processState = 'running';
  }

  ngOnInit() {
  }

  onSelectProcessType(displayProcessType: string) {
    console.log('Changed process type to show : ', displayProcessType);

    if (displayProcessType === 'running') {
      this.processTypeName = 'Running';
      this.processState = 'running';
    } else if (displayProcessType === 'completed') {
      this.processTypeName = 'Completed';
      this.processState = 'completed';
    }
  }

  onAppClick(appDef: AppDefinitionRepresentationModel) {
    console.log('Process state: ' , this.processState, ' Selected App : ', appDef);

    if (appDef) {
      this.appId = appDef.id;
      this.appName = appDef.name;
    }
  }

  onProcessClick(id: string) {
    console.log('Navigating to Process Instance Details : ', id);

    this.router.navigate(['/my-processes', id]);
  }
}
