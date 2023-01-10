import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-fav',
  templateUrl: './list-fav.component.html',
  styleUrls: ['./list-fav.component.css']
})
export class ListFavComponent implements OnInit{

    @Input() bookObject: { title: string; } | undefined;

    constructor(){}

  
  
  
  
  ngOnInit(): void {
    
  }
  



  
}
