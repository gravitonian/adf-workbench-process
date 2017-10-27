import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { CardViewItem, CardViewTextItemModel } from 'ng2-alfresco-core';

import { ProcessService, ProcessDefinitionRepresentation } from 'ng2-activiti-processlist';
import { TaskListService } from 'ng2-activiti-tasklist';

@Component({
  selector: 'app-process-definitions-details-page',
  templateUrl: './process-definitions-details-page.component.html',
  styleUrls: ['./process-definitions-details-page.component.css']
})
export class ProcessDefinitionsDetailsPageComponent implements OnInit {
  appName: string;
  procDefId: string;
  procDefName: string;
  properties: Array<CardViewItem>;

  constructor(private router: Router,
              private activatedRoute: ActivatedRoute,
              private taskListService: TaskListService,
              private processService: ProcessService) {
    this.properties = new Array<CardViewItem>();
  }

  ngOnInit() {
    const appId = this.activatedRoute.snapshot.params['process-app-id'];
    this.procDefId = this.activatedRoute.snapshot.params['process-def-id'];
    console.log('Showing process definition for app: ', appId, ' and process def ID ', this.procDefId);

    this.taskListService.getApplicationDetailsById(+appId).subscribe(
      (appDef: any) => {
        this.appName = appDef.name;
      },
      (error) => {
        console.log('Error: ', error);
      });

    this.processService.getProcessDefinitions(appId).subscribe(
      (procDefs: ProcessDefinitionRepresentation[]) => {
        for (const pd of procDefs) {
          if (this.procDefId === pd.id) {
            this.procDefName = pd.name;
            this.setupProps(pd);
          }
        }
      },
      (error) => {
        console.log('Error: ', error);
      });
  }

  onGoBack($event: Event) {
    this.navigateBack2AppList();
  }

  private navigateBack2AppList() {
    this.router.navigate(['../../procdef-list'],
      {
        relativeTo: this.activatedRoute
      });
  }

  private setupProps(procDef: ProcessDefinitionRepresentation) {
    console.log('setupProps: ', procDef.id);

    const idProp = new CardViewTextItemModel({label: 'Id:', value: procDef.id, key: 'procDefId'});
    const nameProp = new CardViewTextItemModel({label: 'Name:', value: procDef.name, key: 'procDefName'});
    const descProp = new CardViewTextItemModel({label: 'Description:', value: procDef.description, key: 'procDefDesc'});
    const keyProp = new CardViewTextItemModel({label: 'Key:', value: procDef.key, key: 'procDefKey'});
    const categoryProp = new CardViewTextItemModel({label: 'Category:', value: procDef.category, key: 'procDefCategory'});
    const verProp = new CardViewTextItemModel({label: 'Version:', value: procDef.version, key: 'procDefVer'});
    const deploymentIdProp = new CardViewTextItemModel({label: 'Deployment Id:', value: procDef.deploymentId, key: 'deploymentId'});
    const tenantIdProp = new CardViewTextItemModel({label: 'Tenant Id:', value: procDef.tenantId, key: 'tenantId'});
    const hasStartFormProp = new CardViewTextItemModel({label: 'Has start form:', value: procDef.hasStartForm, key: 'hasStartForm'});

    this.properties.push(idProp);
    this.properties.push(nameProp);
    this.properties.push(descProp);
    this.properties.push(keyProp);
    this.properties.push(categoryProp);
    this.properties.push(verProp);
    this.properties.push(deploymentIdProp);
    this.properties.push(tenantIdProp);
    this.properties.push(hasStartFormProp);

    if (procDef.metaDataValues) {
      let metadataCount = 0;
      for (const metaDataValue of procDef.metaDataValues) {
        this.properties.push(new CardViewTextItemModel({
          label: 'Metadata (' + metadataCount + '):',
          value: metaDataValue,
          key: 'metadata' + metadataCount }));
        metadataCount++;
      }
    }
  }
}
