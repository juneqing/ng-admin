import { Component, OnInit, Input } from '@angular/core';
import { ConfigService } from '../../services/config.service';
import { Types } from '../../types'
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  @Input() tableName: string = '表单';
  @Input() api:string='';
  @Input() fileds: Types.Field[];
  items:any[]=[];

  constructor(public config: ConfigService) { }

  ngOnInit() {
    if(!this.api || !this.fileds || !(this.fileds.length<=0)){
      throw new Error(`please  inject  property  "api"  "fileds" `);
    }else{
        this.getItemList();
    }
  }
  async getItemList(){
    this.items =await this.config.GetServer(this.api);
  }

  


}
