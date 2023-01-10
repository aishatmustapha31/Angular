import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {

  constructor() { }

   getEmployees(){
    return[
      {"id":1, "name": "Andrew", "age":30,},
      {"id":2, "name": "Tomi", "age":24,},
      {"id":3, "name": "Glory", "age":20,},
      {"id":4, "name": "Princess", "age":35,},
      {"id":5, "name": "Davis", "age":40,},
    ]
   }

}
