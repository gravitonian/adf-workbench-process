import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ProcessService, ProcessDefinitionRepresentation } from 'ng2-activiti-processlist';
import { TaskListService } from 'ng2-activiti-tasklist';

import { ObjectDataTableAdapter, ObjectDataRow, DataCellEvent, DataRowActionEvent, DataRowEvent } from 'ng2-alfresco-datatable';

import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'app-process-definitions-list-page',
  templateUrl: './process-definitions-list-page.component.html',
  styleUrls: ['./process-definitions-list-page.component.css']
})
export class ProcessDefinitionsListPageComponent implements OnInit {
  appId: string;
  appName: string;
  data: ObjectDataTableAdapter;
  isLoading = true;

  detailsMenuActionId = 'details';
  showDetailsMenuAction = {
    title: 'Show Details',
    subject: new Subject(),
    // your custom metadata needed for onExecuteThreeDotsMenuItem
    id: this.detailsMenuActionId
  };

  constructor(private router: Router,
              private activatedRoute: ActivatedRoute,
              private taskListService: TaskListService,
              private processService: ProcessService) {
    this.data = new ObjectDataTableAdapter();
  }

  ngOnInit() {
    this.showDetailsMenuAction.subject.subscribe(item => this.onExecuteDropDownMenuItem(item));

    this.appId = this.activatedRoute.snapshot.params['process-app-id'];
    console.log('Showing process definitions for app: ', this.appId);

    this.taskListService.getApplicationDetailsById(+this.appId).subscribe(
      (appDef: any) => {
        this.appName = appDef.name;
      },
      (error) => {
        console.log('Error: ', error);
      });

    this.processService.getProcessDefinitions(this.appId).subscribe(
      (procDefs: ProcessDefinitionRepresentation[]) => {
        this.isLoading = true;
        const procDefRows = this.createDataRows(procDefs);
        this.data.setRows(procDefRows);
        this.isLoading = false;
      },
      (error) => {
        console.log('Error: ', error);
      });
  }

  onShowThreeDotsMenu(event: DataCellEvent) {
    event.value.actions = [
      this.showDetailsMenuAction
    ];
  }

  onShowDropDownMenu(event: DataCellEvent) {
    const args = event.value;
    const procDefId = args.row.getValue('id');

    event.value.actions = [
      this.showDetailsMenuAction
    ];

    event.value.actions =
      event.value.actions.map(a => {
        return {
          title: a.title,
          subject: a.subject,
          id: a.id,
          procDefId: procDefId, // Inject the context (i.e. Proc Def Id)
        };
      });
  }

  onExecuteThreeDotsMenuItem(event: DataRowActionEvent) {
    const args = event.value;
    const menuActionId = args.action.id;
    const procDefId = args.row.getValue('id'); // Something like ReviewaFile:2:2506
    console.log(`ThreeDots menu item invoked: action = ${menuActionId} (${args.action.title}) procDefId = ${procDefId}`);

    this.navigate2ProcDetails(menuActionId, procDefId);
  }

  onExecuteDropDownMenuItem(menuItem) {
    const menuActionId = menuItem.id;
    const procDefId = menuItem.procDefId; // Something like ReviewaFile:2:2506
    console.log(`DropDown menu item invoked: action = ${menuActionId} (${menuItem.title}) procDefId = ${procDefId}`);

    this.navigate2ProcDetails(menuActionId, procDefId);
  }

  onRowClick(event: DataRowEvent) {
    // Not currently doing anything when row is clicked
  }

  onGoBack($event: Event) {
    this.navigateBack2AppList();
  }

  private navigateBack2AppList() {
    this.router.navigate(['../'],
      {
        relativeTo: this.activatedRoute
      });
  }

  private navigate2ProcDetails(menuActionId: string, procDefId: string) {
    if (menuActionId === this.detailsMenuActionId) {
      this.router.navigate(['../procdef-details', procDefId ],
        {
          relativeTo: this.activatedRoute
        });
    }
  }

  private createDataRows(procDefs: ProcessDefinitionRepresentation[]): ObjectDataRow[] {
    const procDefRows: ObjectDataRow[] = [];

    procDefs.forEach((procDef) => {
      procDefRows.push(new ObjectDataRow(procDef));
    });

    return procDefRows;
  }
}
