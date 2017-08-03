import { ConfigService } from '../../services/config.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-statics-page',
  templateUrl: './statics-page.component.html',
  styleUrls: ['./statics-page.component.css']
})
export class StaticsPageComponent implements OnInit {
  systemInfo = {
    todayActiveUserNum: 1,
    todaySignupCount: 0,
    totalNum: 10,
    weekActiveUserNum: 3,
    yesActiveUserNum: 0,
    yesSignupCount: 0
  }

  constructor(public config: ConfigService) {
    this.getSystemLog();
  }
  async getSystemLog() {
    // debugger;
    this.systemInfo = await this.config.GetManage('system-log');
  }

  ngOnInit() {
  }

}
