import { ConfigService } from '../../services/config.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-tag-list-page',
  templateUrl: './task-tag-list-page.component.html',
  styleUrls: ['./task-tag-list-page.component.css']
})
export class TaskTagListPageComponent implements OnInit {
  taskNums = [];
  taskTags = [];
  constructor(public config: ConfigService) {
    this.getTaskTagList();
  }

  ngOnInit() {

  }
  async  getTaskTagList() {
    let data = await this.config.Get('taskTag-list');
    this.taskNums = data.taskNums;
    this.taskTags = data.taskTags;
  }

  async deleteTaskTag(taskTag, i) {
    let subTaskNum: number = this.taskNums[i];
    if (subTaskNum > 0) {
      alert('请删除下面子类产品')
    } else {
      let action = await this.config.Delete(`taskTag?_id=${taskTag._id}`);
      console.log(action);
    }

    this.getTaskTagList();

  }

}
