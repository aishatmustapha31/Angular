import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{

 name: string;
 message: string;
 person: any;
 date: any;


 constructor(){
  this.name= "Welcome Message";
  this.message= "Pipes Tutorial";
  this.person= {
    "firstName": "Aishat",
    "lastName": "Mustapha"
  }
  this.date= new Date
 }

  ngOnInit(): void {
    
  }
  
}
