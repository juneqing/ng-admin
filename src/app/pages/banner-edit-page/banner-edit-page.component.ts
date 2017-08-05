import { ConfigService } from '../../services/config.service';
import { Component, OnInit } from '@angular/core';
import { Types } from '../../types';

@Component({
  selector: 'app-banner-edit-page',
  templateUrl: './banner-edit-page.component.html',
  styleUrls: ['./banner-edit-page.component.css']
})
export class BannerEditPageComponent implements OnInit {
  _id: string = '';
  editBanner: any = { _id: '', title: '', task: '' }
  tasks: Types.ITask[] = [];
  constructor(public config: ConfigService) {
    this._id = this.config.route.snapshot.queryParams._id;
    this.getBanner();
  }

  ngOnInit() {
  }
  async getBanner() {//获取广告的id
    this.editBanner = await this.config.GetServer('banner?_id=' + this._id);
  }
  async modifyBanner() {//图片信息修改
    await this.config.PutServer('banner?_id=' + this.editBanner._id, { sort: this.editBanner.sort, bannerImg: this.editBanner.bannerImg });
    this.config.router.navigateByUrl('/admin/banner-list');
  }
 

  async   uploadImage(file: File) {
    // 文件转换成base64
    let base64 = await this.config.convertFileToBase64(file);
    //  压缩bas64图片数据 
    // let compressBase64 = await this.config.convertImageToBase64(base64);
    // 上传并返回图片地址
   let url = await this.config.PostServer('uploadBase64',{base64});
     this.editBanner.bannerImg=url;
  }


}
