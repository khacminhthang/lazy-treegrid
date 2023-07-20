import { Component, OnInit, ViewChild } from '@angular/core';
import { RowExpandingEventArgs, TreeGridComponent } from "@syncfusion/ej2-angular-treegrid"
import { sampleData } from '../jsontreegriddata';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  public data: any[] = [];

  showTreeGrid = false;
  enableCollapseAll = true;

  @ViewChild('treegrid')
  public treegrid?: TreeGridComponent;

  ngOnInit(): void {
    this.data = sampleData;
  }

  async onExpanding(event: any) {
    if (this.data.filter(x => x.taskID == event.data.taskID)[0].subtasks.length == 0) {
      event.cancel = true;
    }
    if (event.data) {
      console.log(event.data.taskID, 'event')
      this.addChild(event.data.taskID);
    }
  }

  async addChild(taskID: any) {
    if (this.data.filter(x => x.taskID == taskID)[0].subtasks.length == 0) {
      this.data.filter(x => x.taskID == taskID)[0].subtasks = [
        {
          taskID: null, taskName: 'Plan timeline', startDate: new Date('02/03/2017'),
          endDate: new Date('02/07/2017'), duration: 5, progress: 100, priority: 'Normal', approved: false
        },
        {
          taskID: null, taskName: 'Plan budget', startDate: new Date('02/03/2017'),
          endDate: new Date('02/07/2017'), duration: 5, progress: 100, priority: 'Low', approved: true
        },
        {
          taskID: null, taskName: 'Allocate resources', startDate: new Date('02/03/2017'),
          endDate: new Date('02/07/2017'), duration: 5, progress: 100, priority: 'Critical', approved: false
        },
        {
          taskID: null, taskName: 'Planning complete', startDate: new Date('02/07/2017'),
          endDate: new Date('02/07/2017'), duration: 0, progress: 0, priority: 'Low', approved: true
        }
      ];
      this.treegrid?.refresh();
    }
  }
}
