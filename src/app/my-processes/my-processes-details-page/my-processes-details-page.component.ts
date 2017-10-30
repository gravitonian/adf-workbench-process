import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DatePipe } from '@angular/common';

import { ProcessService, ProcessInstance } from 'ng2-activiti-processlist';

@Component({
  selector: 'app-my-processes-details-page',
  templateUrl: './my-processes-details-page.component.html',
  styleUrls: ['./my-processes-details-page.component.css']
})
export class MyProcessesDetailsPageComponent implements OnInit {
  processDetails: ProcessInstance;

  constructor(private router: Router,
              private activatedRoute: ActivatedRoute,
              private processService: ProcessService) {
  }

  ngOnInit() {
    const processId = this.activatedRoute.snapshot.params['process-id'];
    console.log('Showing process details for : ', processId);

    this.processService.getProcess(processId).subscribe(
      (processDetails: ProcessInstance) => {
        this.processDetails = processDetails;
      },
      (error) => {
        console.log('Error: ', error);
      });
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

  isRunning(): boolean {
    return this.processDetails && !this.processDetails.ended;
  }

  cancelProcess() {
    this.processService.cancelProcess(this.processDetails.id).subscribe(
      (data) => {
        console.log('Process instance was cancelled: ', this.processDetails.id);
        this.processDetails = null;
      }, (err) => {
        console.log('Process instance could not be cancelled: ', this.processDetails.id, ', error: ', err);
      });
  }

  onAttachmentClick() {

  }

  getProcessNameOrDescription(dateFormat): string {
    let name = '';

    if (this.processDetails) {
      name = this.processDetails.name ||
        this.processDetails.processDefinitionName + ' - ' + this.getFormatDate(this.processDetails.started, dateFormat);
    }

    return name;
  }

  private getFormatDate(value, format: string) {
    const datePipe = new DatePipe('en-US');

    try {
      return datePipe.transform(value, format);
    } catch (err) {
      console.log(`Error parsing date ${value} to format ${format}`);
    }
  }

  onTasksError(error: any) {
    console.log(`Error loading tasks ${error} for process instance ${this.processDetails.id}`);
  }
}
