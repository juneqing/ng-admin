import { ConfigService } from '../../services/config.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-tag-new-page',
  templateUrl: './task-tag-new-page.component.html',
  styleUrls: ['./task-tag-new-page.component.css']
})
export class TaskTagNewPageComponent implements OnInit {
  newTaskTag: { name: string, sort: number } = {
    name: '',
    sort: 1
  }
  constructor(public config: ConfigService) { }

  async postTaskTag() {
    let newTask = await this.config.Post('taskTag', this.newTaskTag);

    this.config.router.navigateByUrl('/admin/taskTag-list');

  }

  ngOnInit() {
  }

}
