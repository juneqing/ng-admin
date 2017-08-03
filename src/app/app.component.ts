import { ConfigService } from './services/config.service';
import { constructDependencies } from '@angular/core/src/di/reflective_provider';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(public config: ConfigService) {
    if (this.checkAdmin()) {
      this.config.router.navigateByUrl('/admin')
    } else {
      this.config.router.navigateByUrl('/login');
    }

  }
  checkAdmin(): boolean {
    return !!this.config.admin;
  }

}
