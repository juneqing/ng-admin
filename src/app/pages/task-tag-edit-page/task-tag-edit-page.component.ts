import { ConfigService } from '../../services/config.service';
import { Component, OnInit } from '@angular/core';
import { Types } from '../../types';

@Component({
  selector: 'app-task-tag-edit-page',
  templateUrl: './task-tag-edit-page.component.html',
  styleUrls: ['./task-tag-edit-page.component.css']
})
export class TaskTagEditPageComponent implements OnInit {
  _id: string;
  editTaskTag: Types.ITaskTag = { name: '', sort: 0 };
  subTasks: Types.ITask[] = [];
  constructor(public config: ConfigService) {
    this._id = this.config.route.snapshot.queryParams._id;
  }

  ngOnInit() {
    this.getTaskTagDetail();
  }


  async getTaskTagDetail() {
    let result = await this.config.Get(`taskTag?_id=${this._id}`);
    this.editTaskTag = result.taskTag;
    this.subTasks = result.subTasks;
  }
  async putTaskTag() {
    let result = await this.config.Put(`taskTag?_id=${this._id}`, this.editTaskTag);
    this.config.router.navigateByUrl('/admin/taskTag-list');
  }

}
