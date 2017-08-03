import { ConfigService } from '../../services/config.service';
import { Component, OnInit } from '@angular/core';
import { Types } from '../../types';
@Component({
  selector: 'app-banner-list-page',
  templateUrl: './banner-list-page.component.html',
  styleUrls: ['./banner-list-page.component.css']
})
export class BannerListPageComponent implements OnInit {
  banners = [];
  pageSize = [1];
  currentPage = 0;
  count: number = 0;
  tasks = [];
  constructor(public config: ConfigService) {
    this.getBannerList();
    this.getTaskList()
  }

  ngOnInit() {
  }
  async addBanner(task) {
    await this.config.GetServer('add-banner?taskId=' + task._id);
    this.getBannerList()
  }
  async getBannerList(page: number = 0) {//获取广告页列表
    this.currentPage = page;
    let result = await this.config.GetServer('banner-list?page=' + page);
    this.banners = result.banners;
    this.count = result.count;
    this.pageSize = new Array(Math.ceil(this.count / 20));
  }
  lessPage() {
    this.currentPage = this.currentPage > 0 ? this.currentPage - 1 : 0;
    this.getBannerList(this.currentPage);
  }
  morePage() {
    this.currentPage = this.currentPage < this.pageSize.length - 1 ? this.currentPage + 1 : this.currentPage;
    this.getBannerList(this.currentPage);
  }

  async toggleBannerActive(banner) {
    await this.config.GetServer('toggle-banner-active?_id=' + banner._id);
    await this.getBannerList();
  }


  async getTaskList(page: number = 0) {//获取任务列表
    let tasks = await this.config.Get('task-list?page=' + page);
    this.tasks = tasks.tasks;
    this.count = tasks.count;
    this.pageSize = new Array(Math.ceil(this.count / 20));
  }
  // async deleteBanner(_id: string) {//删除广告
  //   await this.config.Delete('banner?_id=' + _id);
  //   await this.getBannerList();
  // }

}
