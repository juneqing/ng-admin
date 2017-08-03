import { Component, OnInit, Input } from '@angular/core';
import { ConfigService } from '../../services/config.service';
import { Types } from '../../types'
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  tableName: string = '表单';
  @Input() items = [];

  @Input() fileds: Types.Field[];


  constructor(public config: ConfigService) { }

  ngOnInit() {

  }


}
