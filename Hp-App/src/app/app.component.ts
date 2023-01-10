import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
   name: any;
   favBooks: any;
   title: any;
   
  



  constructor(){
    this.name= "Aisha Mustapha";
    this.favBooks = [
       this.title= "Principles", "The Story of Success", "The Story of Success", "Grass to grace"
      
     
    ];
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  
  }
  

    
 

  
