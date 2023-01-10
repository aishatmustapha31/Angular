import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit{
  employees: { id: number; name: string; age: number; }[];
  

  constructor(){
    this.employees=[
      {"id":1, "name": "Andrew", "age":30,},
      {"id":2, "name": "Tomi", "age":24,},
      {"id":3, "name": "Glory", "age":20,},
      {"id":4, "name": "Princess", "age":35,},
      {"id":5, "name": "Davis", "age":40,},
    ]
  }
  ngOnInit(): void {
    
    
  }

}
