import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../../services/config.service';
import { Types } from '../../types';
@Component({
  selector: 'app-user-list-page',
  templateUrl: './user-list-page.component.html',
  styleUrls: ['./user-list-page.component.css']
})
export class UserListPageComponent implements OnInit {
  users = [];
  keyword = '';
  pageSize = [1];
  currentPage = 0;
  count: number = 0;

  userListFileds: Types.Field[] = [
    { label: '昵称', key: 'nickname' },
    { label: '性别', key: 'sex' }
  ];


  constructor(public config: ConfigService) {
    this.getUserList();
  }

  ngOnInit() {

  }

  async getUserList(page: number = 0) {//获取用户列表
    this.currentPage = page;
    let result = await this.config.Get('user-list?page=' + page);
    this.users = result.users;
    this.count = result.count;
    this.pageSize = new Array(Math.ceil(this.count / 20));
  }
  lessPage() {
    this.currentPage = this.currentPage > 0 ? this.currentPage - 1 : 0;
    this.getUserList(this.currentPage);
  }
  morePage() {
    this.currentPage = this.currentPage < this.pageSize.length - 1 ? this.currentPage + 1 : this.currentPage;
    this.getUserList(this.currentPage);
  }

  async deleteUser(_id: string) {//删除用户
    await this.config.Delete('user?_id=' + _id);
    await this.getUserList();
  }
  async editUser(_id: string) {//编辑用户信息

  }
  async searchUser() {//用户信息搜索
    this.users = await this.config.Get('user-search?keyword=' + this.keyword);
  }

}
