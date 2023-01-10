import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {VoteBodyComponent} from './Components/DashboardComponent/VoteBodyComponnet/VoteBody.component';
import {VoteHeaderComponent} from './Components/DashboardComponent/VoteHeaderComponent/VoteHeader.component';
import {DashboardComponent} from './Components/DashboardComponent/Dashboard.component';
import{ContactComponent} from './Components/ContactComponent/Contact.component';

@NgModule({
  declarations: [
    AppComponent,
    VoteBodyComponent,
    VoteHeaderComponent,
    DashboardComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
