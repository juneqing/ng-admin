import { ConfigService } from '../../services/config.service';
import { Component, OnInit,Sanitizer } from '@angular/core';
import { Types } from '../../types';


@Component({
  selector: 'app-office-task-page',
  templateUrl: './office-task-page.component.html',
  styleUrls: ['./office-task-page.component.css']
})
export class OfficeTaskPageComponent implements OnInit {
  selectedOfficeTask={};
  taskTags = [];
  prviewImg='';
  selectedTaskTag;
  newTask = {
    title: '',
    taskTag: '',
    imageUrl: '',
    totalMoney: 0,
    shareMoney: 0,
    websiteUrl: '',
    content: ''
  }
  newTasks = {
    title: '',
    taskTag: '',
    imageUrl: '',
    totalMoney: 0,
    shareMoney: 0,
    websiteUrl: '',
    content: ''
  }
  officeTasks=[];
  constructor(public config: ConfigService,public safe :Sanitizer) {
    this.getTaskTagList()
    this.getOfficeTaskList();
  }

  ngOnInit() {
  }
  async  getTaskTagList() {
    let data = await this.config.Get('taskTag-list');
    this.taskTags = data.taskTags;
    this.selectedTaskTag= this.taskTags[0];
  }

  async getOfficeTaskList() {
  this.officeTasks=  await this.config.GetServer('office-task');
  }
  async submitOffice() {
      this.newTask['taskTag']=this.selectedTaskTag._id;
   let newTask = await this.config.PostServer('office-task',this.newTask);
   await this.getOfficeTaskList()
  }
  async uploadImage(file:File){
    //图片转成base64
    let base64 =await this.config.convertFileToBase64(file);
    //压缩base64图片
    base64  =  await this.config.convertImageToBase64(base64);
   //预览图
    this.prviewImg= base64;

    //转换成base64后的路径
    let url = await this.config.PostServer('uploadBase64',{base64});
    this.newTask.imageUrl=url;
  }
  checkTask(){}

  async deleteOffcieTask(task){
   let action =  await this.config.DeleteServer('office-task?_id='+task._id);
   await  this.getOfficeTaskList();

  }
  async updateOffice(){//数据更新
    // this.newTasks['taskTag']=this.selectedOfficeTask._id;
    let newTasks=await this.config.PutServer('office-task?_id='+this.selectedOfficeTask['_id'],this.selectedOfficeTask);
    await this.getOfficeTaskList()
  }
    
}
