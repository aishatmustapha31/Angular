import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {MatDialog} from '@angular/material/dialog';
import { EditDialog } from './EditDialog';
import { Employee } from './Employee';

@Component({
  selector: 'sample-form',
  templateUrl: './sample-form.component.html',
  styleUrls: ['./sample-form.component.css']
})
export class SampleFormComponent implements OnInit, OnDestroy{


  employeeForm: FormGroup;
  employeeListItems : Employee[];
  selectedEmployee:Employee;

  constructor(public dialog: MatDialog) {
    this.employeeListItems= [];
    this.selectedEmployee={firstName:'',lastName:'',phone:'',email:''};
    this.employeeForm = new FormGroup({
      firstName: new FormControl("James",
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(10)]),
      lastName: new FormControl("Bond", 
      [
        Validators.required,
        Validators.minLength(3)]),

      phone: new FormControl("09087564333", 
      [
        Validators.required,
        Validators.minLength(11),
        Validators.maxLength(11)
        
      ]),
      email: new FormControl("james@mail.com", [Validators.required, Validators.email])
    });


  }
  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }
  ngOnInit(): void {
 
   this.loadEmployee();
   console.log("Dirty", this.employeeForm.controls["firstName"].dirty);
   console.log("Invalid", this.employeeForm.controls["firstName"].invalid);
   console.log("Touched", this.employeeForm.controls["firstName"].touched);
   console.log("Pristine", this.employeeForm.controls["firstName"].pristine);
   console.log(this.employeeForm.pristine);
  
  }

  openDialog(emp:Employee){
   this.dialog.open(EditDialog,{
    data:emp
   });

  }

  inputChanged(){
  
    console.log(this.employeeForm.dirty);
  }

  loadEmployee(){
    var emplListString = String(localStorage.getItem("employees"));
    this.employeeListItems= JSON.parse(emplListString);
  }

  submitForm() {
    var fName = this.employeeForm.value.firstName;
    var lName = this.employeeForm.value.lastName;
    var email = this.employeeForm.value.email;
    var phone = this.employeeForm.value.phone;



    var employee: Employee = {
      firstName: fName,
      lastName: lName,
      email,
      phone
    }

    this.storeEmployee(employee);
    this.loadEmployee();

  }

  storeEmployee(newEmployee: Employee) {
    var emplListString = String(localStorage.getItem("employees"));
    var employeeList: Employee[] = JSON.parse(emplListString);
    if (employeeList && employeeList.length > 0) {

      employeeList.push(newEmployee);
      var employeeListString = JSON.stringify(employeeList);
      localStorage.setItem("employees", employeeListString);
    } else {
      var employeeList = [newEmployee];

      var employeeListString = JSON.stringify(employeeList);
      localStorage.setItem("employees", employeeListString);
    }
  }

}



@Component({
  selector: 'dialog-selector',
  templateUrl: './dialog-template.html',
})
export class DialogContentExampleDialog {}