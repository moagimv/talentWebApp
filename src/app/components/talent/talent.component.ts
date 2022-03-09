import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-talent',
  templateUrl: './talent.component.html',
  styleUrls: ['./talent.component.css']
})
export class TalentComponent implements OnInit {

  message?: string;

  constructor() { }

  ngOnInit(): void {
    this.message = 'Welcome to Talent Portal'
  }

}
