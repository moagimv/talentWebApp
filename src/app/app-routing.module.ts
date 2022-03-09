import { UserRolesComponent } from './components/user-roles/user-roles.component';
import { Error404Component } from './error404/error404.component';
import { UsersComponent } from './components/users/users.component';
import { ReportComponent } from './components/report/report.component';
import { TalentComponent } from './components/talent/talent.component';
import { AdminComponent } from './components/admin/admin.component';
import { ReportMenuComponent } from './template/report-menu/report-menu.component';
import { TalentMenuComponent } from './template/talent-menu/talent-menu.component';
import { AdminMenuComponent } from './template/admin-menu/admin-menu.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
    {path: 'dashboard', component: DashboardComponent},
    {path:'admin', component: AdminMenuComponent,
      children: [
        {path: 'adminDash', component: AdminComponent},
        {path: 'roles', component: UserRolesComponent},
        {path: 'users', component: UsersComponent},
        {path: '', redirectTo:'adminDash', pathMatch: 'full'}
      ]},
    {path: 'talent', component: TalentMenuComponent,
      children: [
        {path: 'talentDash', component: TalentComponent},
        {path: '', redirectTo:'talentDash', pathMatch: 'full'}
      ]},
    {path: 'report', component: ReportMenuComponent,
      children: [
        {path: 'reportDash', component: ReportComponent},
        {path: '', redirectTo:'reportDash', pathMatch: 'full'}
      ]},
    {path: '', redirectTo:'login', pathMatch: 'full'},
    {path: '**', component: Error404Component},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
