import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../../services/config.service';
import { Types } from '../../types';
@Component({
  selector: 'app-user-edit-page',
  templateUrl: './user-edit-page.component.html',
  styleUrls: ['./user-edit-page.component.css']
})
export class UserEditPageComponent implements OnInit {
  _id: string = '';
  editUser: any = { _id: '', nickname: '', sex: '' }
  tasks: Types.ITask[] = [];
  getMoneyRequests: Types.IGetMoneyRequest[] = [];
  tree = {
    level1Parent: { _id: '', nickname: '' }, level2Parent: { _id: '', nickname: '' }, level3Parent: { _id: '', nickname: '' },
    level1Children: [],
    level2Children: [],
    level3Children: []
  }
  //父子三级[ '用户a','用户b','用户c','用户d','用户e','用户f']




  constructor(public config: ConfigService) {
    this._id = this.config.route.snapshot.queryParams._id;

  }

  ngOnInit() {
    this.getUser();
  }

  async getUser() {//获取用户id
    let result = await this.config.Get('user?_id=' + this._id);
    this.tasks = result.tasks;
    this.editUser = result.user;
    this.getMoneyRequests = result.getMoneyRequests;
    this.tree = result.tree;
  }
  async modifyUser() {//用户信息修改
    await this.config.Put('user?_id=' + this.editUser._id, this.editUser);
    this.config.router.navigateByUrl('/admin/user-list');
  }
}
