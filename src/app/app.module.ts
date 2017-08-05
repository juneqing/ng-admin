import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import 'rxjs/add/operator/toPromise';
import { AppComponent } from './app.component';
import { MainHeaderComponent } from './com/main-header/main-header.component';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ContentWrapperComponent } from './com/content-wrapper/content-wrapper.component';
import { MainFooterComponent } from './com/main-footer/main-footer.component';
import { ControlSidebarComponent } from './com/control-sidebar/control-sidebar.component';
import { MainSidebarComponent } from './com/main-sidebar/main-sidebar.component';
import { RouterModule } from '@angular/router';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { ConfigService } from './services/config.service';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { StaticsPageComponent } from './pages/statics-page/statics-page.component';
import { TaskTagPageComponent } from './pages/task-tag-page/task-tag-page.component';
import { TaskTagListPageComponent } from './pages/task-tag-list-page/task-tag-list-page.component';
import { TaskTagNewPageComponent } from './pages/task-tag-new-page/task-tag-new-page.component';
import { RechargeListPageComponent } from './pages/recharge-list-page/recharge-list-page.component';
import { RechargeEditPageComponent } from './pages/recharge-edit-page/recharge-edit-page.component';
import { TaskTagEditPageComponent } from './pages/task-tag-edit-page/task-tag-edit-page.component';
import { TaskListPageComponent } from './pages/task-list-page/task-list-page.component';
import { MoneyPipe } from './money.pipe';
import { UserListPageComponent } from './pages/user-list-page/user-list-page.component';
import { UserEditPageComponent } from './pages/user-edit-page/user-edit-page.component';
import { TableComponent } from './com/table/table.component';
import { RechargeCashPageComponent } from './pages/recharge-cash-page/recharge-cash-page.component';
import { BannerListPageComponent } from './pages/banner-list-page/banner-list-page.component';
import { BannerEditPageComponent } from './pages/banner-edit-page/banner-edit-page.component';
import { TaskRecordListPageComponent } from './pages/task-record-list-page/task-record-list-page.component';
import { OfficeTaskPageComponent } from './pages/office-task-page/office-task-page.component';
import { OfficeReleaseEditPageComponent } from './pages/office-release-edit-page/office-release-edit-page.component';
import { TaskEditPageComponent } from './pages/task-edit-page/task-edit-page.component';


@NgModule({
  declarations: [
    AppComponent,
    MainHeaderComponent,
    ContentWrapperComponent,
    MainFooterComponent,
    ControlSidebarComponent,
    MainSidebarComponent,
    LoginPageComponent,
    AdminPageComponent,
    HomePageComponent,
    StaticsPageComponent,
    TaskTagPageComponent,
    TaskTagListPageComponent,
    TaskTagNewPageComponent,
    RechargeListPageComponent,
    RechargeEditPageComponent,
    TaskTagEditPageComponent,
    TaskListPageComponent,
    MoneyPipe,
    UserListPageComponent,
    UserEditPageComponent,
    TableComponent,
    RechargeCashPageComponent,
    BannerListPageComponent,
    BannerEditPageComponent,
    TaskRecordListPageComponent,
    OfficeTaskPageComponent,
    OfficeReleaseEditPageComponent,
    TaskEditPageComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: '', redirectTo: '/login', pathMatch: 'full' },
      { path: 'login', component: LoginPageComponent, pathMatch: 'full' },
      {
        path: 'admin', component: AdminPageComponent,
        children: [
          { path: '', component: HomePageComponent },
          { path: 'statics', component: StaticsPageComponent },
          { path: 'taskTag-list', component: TaskTagListPageComponent },
          { path: 'taskTag-new', component: TaskTagNewPageComponent },
          { path: 'taskTag', component: TaskTagPageComponent },
          { path: 'recharge-list', component: RechargeListPageComponent },
          { path: 'taskTag-edit', component: TaskTagEditPageComponent },
          { path: 'task-list', component: TaskListPageComponent },
          { path: 'user-list', component: UserListPageComponent },
          { path: 'user-edit', component: UserEditPageComponent },
          { path: 'recharge-cash', component: RechargeCashPageComponent },
          { path: 'banner-list', component: BannerListPageComponent },
          { path: 'banner-edit', component: BannerEditPageComponent },
          { path: 'task-record-list', component: TaskRecordListPageComponent },
          { path: 'office-task', component: OfficeTaskPageComponent },
          { path: 'office-release-edit', component: OfficeReleaseEditPageComponent },
          {path:'task-edit',component:TaskEditPageComponent}
        ]
      }
    ]),
    FormsModule,
    HttpModule
  ],
  providers: [ConfigService],
  bootstrap: [AppComponent]
})
export class AppModule { }
