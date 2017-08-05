import { Component, OnInit, Input } from '@angular/core';
import { ConfigService } from '../../services/config.service';
import { Types } from '../../types'

@Component({
  selector: 'app-task-edit-page',
  templateUrl: './task-edit-page.component.html',
  styleUrls: ['./task-edit-page.component.css']
})
export class TaskEditPageComponent implements OnInit {
 _id: string = '';
  editTask: any = { _id: '', title: '', task: '' }
  tasks: Types.ITask[] = [];
  constructor(public config: ConfigService) {
    this._id = this.config.route.snapshot.queryParams._id;
    this.getTask();
  }

 

  ngOnInit() {
  }
async getTask() {//获取广告的id
    this.editTask = await this.config.Get('task?_id=' + this._id);
  }
  async modifyTask() {//图片信息修改
    await this.config.PutServer('banner?_id=' + this.editTask._id, { sort: this.editTask.sort, bannerImg: this.editTask.bannerImg });
    this.config.router.navigateByUrl('/admin/task-list');
  }
  async   uploadImage(file: File) {
    // 文件转换成base64
    let base64 = await this.config.convertFileToBase64(file);
    //  压缩bas64图片数据 
    // let compressBase64 = await this.config.convertImageToBase64(base64);
    // 上传并返回图片地址
   let url = await this.config.PostServer('uploadBase64',{base64});
     console.log(url);
  }
}
