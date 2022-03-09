import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {MatCardModule} from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';

import {PanelModule} from 'primeng/panel';
import {FieldsetModule} from 'primeng/fieldset';
import {ButtonModule} from 'primeng/button';
import {TabMenuModule} from 'primeng/tabmenu';
import {TableModule} from 'primeng/table';

import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './template/header/header.component';
import { FooterComponent } from './template/footer/footer.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MainHeaderComponent } from './template/main-header/main-header.component';
import { AdminMenuComponent } from './template/admin-menu/admin-menu.component';
import { AdminComponent } from './components/admin/admin.component';
import { TalentMenuComponent } from './template/talent-menu/talent-menu.component';
import { TalentComponent } from './components/talent/talent.component';
import { ReportMenuComponent } from './template/report-menu/report-menu.component';
import { ReportComponent } from './components/report/report.component';
import { UsersComponent } from './components/users/users.component';
import { Error404Component } from './error404/error404.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UserRolesComponent } from './components/user-roles/user-roles.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    DashboardComponent,
    MainHeaderComponent,
    AdminMenuComponent,
    AdminComponent,
    TalentMenuComponent,
    TalentComponent,
    ReportMenuComponent,
    ReportComponent,
    UsersComponent,
    Error404Component,
    UserRolesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    NgbModule,
    MatCheckboxModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    PanelModule,
    FieldsetModule,
    ButtonModule,
    TabMenuModule,
    TableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
