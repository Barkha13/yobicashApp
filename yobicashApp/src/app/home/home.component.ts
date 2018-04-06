import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  email_input="Enter your Email";

  constructor() { }

  ngOnInit() {
  }
  onClick(){
    this.email_input;
  }
  
}
