import { ConfigService } from '../../services/config.service';
import { Component, OnInit } from '@angular/core';
import { Types } from '../../types';

@Component({
  selector: 'app-task-list-page',
  templateUrl: './task-list-page.component.html',
  styleUrls: ['./task-list-page.component.css']
})
export class TaskListPageComponent implements OnInit {
  pageSize = [1];
  currentPage = 0;
  count: number = 0;
  taskTags: Types.ITaskTag[] = [];
  tasks: Types.ITask[];
  selectedTaskTag: Types.ITaskTag;
  constructor(public config: ConfigService) {
    this.getTaskTags();
  }

  ngOnInit() {
  }
  selectTaskTag(taskTag: Types.ITaskTag) {
    this.selectedTaskTag = taskTag;
    this.getTaskByTaskTag(this.selectedTaskTag)
    // this.getUnActiveTaskByTaskTag();
  }

  /**
   * 
   *  返回所有任务包括未审核 已经审核的任务
   */
  async getTaskByTaskTag(taskTag?: Types.ITaskTag) {
    this.tasks = await this.config.Get(`task-by-taskTag?taskTag=${this.selectedTaskTag._id}`);
  }

  /**
   * 
   * 获取未审核的任务
   */
  async getUnActiveTaskByTaskTag() {

    this.tasks = await this.config.Get(`task-by-taskTag?taskTag=${this.selectedTaskTag._id}&active=false`);


  }

  async getTaskTags(page: number = 0) {
    let result = await this.config.Get('taskTag-list?page' + page);
    this.taskTags = result.taskTags;
    result.taskNums.forEach((num, i) => {
      this.taskTags[i].subTaskNum = num;
    });
    this.selectTaskTag(this.taskTags[0]);
  }
  checkTask(task: Types.ITask) {
    task.active = !task.active;
    this.updateTask(task);
  }
  async updateTask(task: Types.ITask) {
    task.publisher = task.publisher['_id'];
    let _id = task._id;
    delete task._id;
    let action = await this.config.Put('task?_id=' + _id, task);
    await this.getUnActiveTaskByTaskTag();
  }
  lessPage() {
    this.currentPage = this.currentPage > 0 ? this.currentPage - 1 : 0;
    this.getTaskTags(this.currentPage);
  }
  morePage() {
    this.currentPage = this.currentPage < this.pageSize.length - 1 ? this.currentPage + 1 : this.currentPage;
    this.getTaskTags(this.currentPage);
  }
}
