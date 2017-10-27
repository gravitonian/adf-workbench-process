import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AppDefinitionRepresentationModel } from 'ng2-activiti-tasklist';

@Component({
  selector: 'app-process-apps-list-page',
  templateUrl: './process-apps-list-page.component.html',
  styleUrls: ['./process-apps-list-page.component.css']
})
export class ProcessAppsListPageComponent implements OnInit {
  /* Create a filter that will exclude the Task List App and include only new custom apps */
  processAppsFilter = [ { tenantId: 1 } ];

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onAppClick(appDef: AppDefinitionRepresentationModel) {
    console.log('Navigating to App Definition : ', appDef);

    this.router.navigate(['/process-apps', appDef.id]);
  }
}
