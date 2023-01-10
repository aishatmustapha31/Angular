import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BoxComponent } from './box/box.component';
import { ToolComponent } from './tool/tool.component';

const routes: Routes = [
  {
  path:"", pathMatch:'full', redirectTo: '/dashboard'
  },
  {
    path:"dashboard", component: DashboardComponent
  },
  {
    path:'box', component:BoxComponent
  },
  {
    path:'tool', component: ToolComponent
  },
  {
    path:"**", component: DashboardComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
