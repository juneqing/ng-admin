import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../../services/config.service';
import { Types } from '../../types';
@Component({
  selector: 'app-recharge-cash-page',
  templateUrl: './recharge-cash-page.component.html',
  styleUrls: ['./recharge-cash-page.component.css']
})
export class RechargeCashPageComponent implements OnInit {
  getmoneys = [];
  count: number = 0;
  pageSize = [1];
  currentPage = 0;
  constructor(public config: ConfigService) { }

  ngOnInit() {
    this.getmoneyList();
  }
  async getmoneyList(page: number = 0) {//获取提现用户列表
    this.currentPage = page;
    let result = await this.config.GetManage('getmoney-list?page=' + page);
    this.getmoneys = result.getmoneyLists;
    this.count = result.count;
    this.pageSize = new Array(Math.ceil(this.count / 30));
    console.log(this.getmoneys);
  }
  lessPage() {
    this.currentPage = this.currentPage > 0 ? this.currentPage - 1 : 0;
    this.getmoneyList(this.currentPage);
  }
  morePage() {
    this.currentPage = this.currentPage < this.pageSize.length - 1 ? this.currentPage + 1 : this.currentPage;
    this.getmoneyList(this.currentPage);
  }
}
