import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  appName: string;
  numberOfMonths:number;
  toDay: Date;
  ngOnInit(): void {
    

  }

  constructor(){
    this.appName="Profile Application";
    this.numberOfMonths=12;
    this.toDay= new Date
  }
    
}




