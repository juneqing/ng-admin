import { ConfigService } from '../../services/config.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recharge-edit-page',
  templateUrl: './recharge-edit-page.component.html',
  styleUrls: ['./recharge-edit-page.component.css']
})
export class RechargeEditPageComponent implements OnInit {
  _id: string;
  constructor(public config: ConfigService) {

  }

  ngOnInit() {
  }

  getTaskTag() {
    this.config

  }

}
