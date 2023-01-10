import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './Components/ContactComponent/Contact.component';
import{DashboardComponent} from './Components/DashboardComponent/Dashboard.component';

const routes: Routes = [
  {path:'', component:DashboardComponent},
  {path:'dashboard', component: DashboardComponent},
  {path:'contact', component:ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }