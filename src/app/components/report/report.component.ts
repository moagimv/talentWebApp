import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {

  message?: string;

  constructor() { }

  ngOnInit(): void {
    this.message = 'Welcome to Report Portal'
  }

}
