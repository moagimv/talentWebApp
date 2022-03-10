import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/User';
import { TokenStorageService } from 'src/app/services/token-storage.service';

@Component({
  selector: 'app-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.css']
})
export class MainHeaderComponent implements OnInit {

  systemUser: User | undefined;
  isLoggedIn?: boolean;
  fullname?: string;
  sid?: string;
  role?: string;

  constructor(private tokenStorage: TokenStorageService) { }

  ngOnInit(): void {
    this.fullname = "Matome Moagi";
    this.sid = "s2026987";
    this.role = "Admin";
    this.isLoggedIn = true;
    /*this.systemUser = this.tokenStorage.getUser();
    if(this.systemUser != null){
      this.isLoggedIn = true;
      this.fullname = this.systemUser.firstname + ' ' + this.systemUser.lastname;
      this.sid = this.systemUser.sid;
      this.role = this.systemUser.role.role;
    }*/
  }

  logout(){
    this.fullname = "";
    this.sid = "";
    this.role = "";
    this.isLoggedIn = false;
    this.tokenStorage.signOut();
  }

}
