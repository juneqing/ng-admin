import { Types } from '../../types';
import { ConfigService } from '../../services/config.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  now: Date = new Date();
  mainInfo = {
    userCount: 0,
    taskTagCount: 0,
    activeTaskCount: 0,
    unActiveTaskCount: 0,

  }
  constructor(public config: ConfigService) {
    this.getUserList()
  }
  async getUserList() {
    this.mainInfo = await this.config.Get('main-info');


  }
  ngOnInit() {
  }

}
