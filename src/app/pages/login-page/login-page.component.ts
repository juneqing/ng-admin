import { ConfigService } from '../../services/config.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  admin = {
    username: '',
    password: ''
  }
  constructor(public config: ConfigService) { }


  login() {
    if (this.admin.username == 'admin' && this.admin.password == '123') {
      this.config.admin = { username: 'admin', password: '123' };
      this.config.router.navigateByUrl('/admin/home')
    }
  }
  ngOnInit() {

  }

}
