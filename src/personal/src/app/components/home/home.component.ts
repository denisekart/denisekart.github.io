import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public myAge:number;
  constructor() { 
    this.myAge=(new Date().getFullYear()-new Date(1991,12,31).getFullYear());
  }

  ngOnInit() {
  }

}
