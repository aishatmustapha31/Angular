import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { Page1Component } from './page1/page1.component';

const routes: Routes = [
  {path:"", component: Page1Component },
  {path:"page1", component: Page1Component },
  {path: "employee-list", component: EmployeeListComponent},
  {path:"employee-detail", component: EmployeeDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
