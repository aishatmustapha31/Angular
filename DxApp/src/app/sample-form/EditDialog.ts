import {Component, Inject}  from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Employee } from './Employee';


@Component({
selector:'edit-dialog',
templateUrl:"EditDialog.html"
})
export class EditDialog{

    employeeForm: FormGroup;
    selectedEmployee: Employee;

    constructor(@Inject(MAT_DIALOG_DATA) public data: Employee){

        this.selectedEmployee = data;

    
        this.employeeForm = new FormGroup({
          firstName: new FormControl(data.firstName,
            [
              Validators.required,
              Validators.minLength(3),
              Validators.maxLength(10)]),
          lastName: new FormControl(data.lastName, 
          [
            Validators.required,
            Validators.minLength(3)]),
    
          phone: new FormControl(data.phone, 
          [
            Validators.required,
            Validators.minLength(11),
            Validators.maxLength(11)
            
          ]),
          email: new FormControl(data.email, [Validators.required, Validators.email])
        });

        

       
    }
}