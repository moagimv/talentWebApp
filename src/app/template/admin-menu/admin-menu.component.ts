import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-admin-menu',
  templateUrl: './admin-menu.component.html',
  styleUrls: ['./admin-menu.component.css']
})
export class AdminMenuComponent implements OnInit {

  items!: MenuItem[];

  activeItem!: MenuItem;

    ngOnInit() {
      this.items = [
        {label: 'Administration', routerLinkActiveOptions: this.activeItem, disabled: true, visible: true},
        {label: '', icon: 'pi pi-fw pi-home',  routerLink: ['/dashboard'], routerLinkActiveOptions: this.activeItem},
        {label: 'Roles', icon: 'pi pi-fw pi-id-card',  routerLink: ['/admin/roles'], routerLinkActiveOptions: this.activeItem},
        {label: 'Users', icon: 'pi pi-fw pi-user',  routerLink: ['/admin/users'], routerLinkActiveOptions: this.activeItem}
      ];
      this.activeItem = this.items[1];
    }

}
