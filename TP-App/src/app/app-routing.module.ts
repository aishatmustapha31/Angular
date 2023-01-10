import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { MyPromiseComponent } from './my-promise/my-promise.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';

const routes: Routes = [
  {path:"", component: EmployeeListComponent},
  {path:"promise", component:MyPromiseComponent},
  {path:"employee-list", component: EmployeeListComponent},
  {path:"employee-detail", component: EmployeeDetailComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
