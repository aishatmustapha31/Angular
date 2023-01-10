import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

   appName: string;
   toDay: Date;
   isCompleted: boolean;
   numberOfMonths:number;
   isDiabled:boolean;
   initStatus:string;
   fullName:string="James Bond";
   successClass: string;
   dangerClass: string;
   hasError: boolean;
   isSpecial: boolean;
   messageClasses: any;
   highlightColor: string;
   titleStyle: any;
   displayName: boolean;
   color: string;
   colors: any;
   name: string;


   nameWithCode:string="";

  constructor() {
    this.appName= "Profile Application";
    this.toDay= new Date();
    this.isCompleted= true;
    this.numberOfMonths = 12;
    this.isDiabled= true;
    this.initStatus="Down State";
    this.successClass= "text-success";
    this.dangerClass= "text-danger";
    this.hasError= false;
    this.isSpecial= true;
    this.messageClasses={
      "text-success":this.hasError,
      "text-danger":this.hasError,
      "text-special": this.isSpecial
    }
    this.highlightColor= "orange";
    this.titleStyle= {
      color: "blue",
      fontStyle: "italic",
    }
    this.displayName= true;
    this.color= "red";
    this.colors= ["red", "blue", "green","yellow"]
    this.name="Aisha Mustapha"

   }

  ngOnInit(): void {
    console.log("Dashboard Component was initialized!");
  }

  onComputeCliked():void{
      this.initStatus="Computation Initialized....";
  }

  onTextChange():void {
       this.nameWithCode = this.generateNameCode(this.fullName);
      console.log(this.nameWithCode);
  }

  generateNameCode(name:string) :string{

    let result:string="";

    let nameArray:string[] = name.split(" ");
    let firsName = nameArray[0];
    let lastName = nameArray[1];

    let fCode = firsName.charAt(0);
    let lCode = lastName.charAt(0);

    result = `${fCode}-${lCode}`;

    return result;

  }

}
