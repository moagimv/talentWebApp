import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.css']
})
export class MainHeaderComponent implements OnInit {


  isLoggedIn?: boolean;
  fullname?: string;
  sid?: string;
  role?: string;

  constructor() { }

  ngOnInit(): void {
    this.isLoggedIn = true;
    this.fullname = 'Matome Moagi';
    this.sid = 's2026987';
    this.role = 'Admin';
  }

  logout(){
    this.fullname = '';
    this.sid = '';
    this.role = '';
    this.isLoggedIn = false;
  }

}
