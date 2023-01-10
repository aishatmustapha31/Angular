import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css']
})
export class Page1Component implements OnInit {
    mainProduct!: Product;
    productList!: Product[];
  


  constructor(private http: HttpClient ){

    http.get<Product[]>('https://fakestoreapi.com/products').subscribe(
      (data)=>{
        console.log(data)
        this.productList= data}
    )
  }



  ngOnInit(): void {
      
  }

}

export interface Product{
  category: string;
  description: string;
  id: number;
  image: string;
  price: number;
  rating: Rating;
  title: string
}

export interface Rating{
    rate:number;
    count: number;
}
