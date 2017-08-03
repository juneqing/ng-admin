import { ConfigService } from '../../services/config.service';
import { Component, OnInit } from '@angular/core';
import { Types } from '../../types';
interface RechargeRecord {
  body: string;
  attach: string;
  out_trade_no: string;
  total_fee: number;
  spbill_create_ip: string;
  openid: string;
  trade_type: string;
  createDt?: Date;
}
@Component({
  selector: 'app-recharge-list-page',
  templateUrl: './recharge-list-page.component.html',
  styleUrls: ['./recharge-list-page.component.css']
})
export class RechargeListPageComponent implements OnInit {
  recharegeListFileds: Types.Field[] = [
    { label: '_id', key: '_id' },
    { label: '提现人', key: 'user.nickname' },
  ]


  pageSize = [1];
  currentPage = 0;
  count: number = 0;
  rechargeRecord: RechargeRecord[] = [];
  constructor(public config: ConfigService) { this.getRechargeRecordList() }

  ngOnInit() {
  }

  deleteRechargeRecord(record) {

  }

  async getRechargeRecordList(page: number = 0) {//获取充值列表
    this.currentPage = page;
    let result = await this.config.GetManage('recharge-list?page=' + page);
    // this.rechargeRecords = await this.config.GetManage('recharge-list');
    this.rechargeRecord = result.rechargeLists;
    this.count = result.count;
    this.pageSize = new Array(Math.ceil(this.count / 30));
    console.log(this.rechargeRecord);
  }
  lessPage() {
    this.currentPage = this.currentPage > 0 ? this.currentPage - 1 : 0;
    this.getRechargeRecordList(this.currentPage);
  }
  morePage() {
    this.currentPage = this.currentPage < this.pageSize.length - 1 ? this.currentPage + 1 : this.currentPage;
    this.getRechargeRecordList(this.currentPage);
  }
}
