import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-my-promise',
  templateUrl: './my-promise.component.html',
  styleUrls: ['./my-promise.component.css']
})
export class MyPromiseComponent implements OnInit {

    mainProduct!: Product;

    productList! : Product[];

  async ngOnInit(): Promise<void> {
/* 
   await this.runMeter1();
   await  this.runMeter2(); */
   var p = new Promise(function(resolve, reject ){
         resolve("data 1");
         resolve("data 2");
         resolve("data 3");
         reject("server error 1");
         reject("server error 2");
         resolve("data 4");
   });
   

     p.then((data)=>{console.log(data)},
     (error)=>{console.log(error)}
     );
     
  

      constructor(private, readonly, http: HttpClient); {
    
         http.get<Product[]>("https://fakestoreapi.com/products").subscribe(
          (data)=>{
            console.log(data);
            this.productList = data;
          },
           (error)=>{
            console.log(error);
           }
           );
    }

  callBackFunc1 = function (rate: number) {

  }

  callBackFunc2 = (rate: number) => {
    let ans = rate * 10;
    return ans;
  }

  callBackFunc3 = (rate: number) => rate * 10;

  callBackFunc4 = (val: string) => console.log(val);

  runMeter1 = async () => {
    console.log("Before Meter 1");
    await setTimeout(() => {
       console.log("Inside Meter 1");
    }, 5000);
    console.log("After meter 1");
  }

  runMeter2 = async ()=>{
    console.log("Before Meter 2");
      await setTimeout(() => {
        console.log("Inside Meter 2");
      }, 2000);
      console.log("After meter 2");
  }


}}


export interface Product{
  category:string,
  description: string,
  id: number,
  image: string,
  price: number,
  rating: Rating,
  title: string
}

export interface Rating{
  rate: number,
  count: number
}