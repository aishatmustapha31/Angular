import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{FormsModule,ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SampleFormComponent } from './sample-form/sample-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialFormComponent, WelcomeDialog } from './material-form/material-form.component';
import {TableComponent} from './table/table.component';

import {MaterialExampleModule} from '../material.module';
import {MatNativeDateModule} from '@angular/material/core';
import {HttpClientModule} from '@angular/common/http';

import {EditDialog} from './sample-form/EditDialog';

@NgModule({
  declarations: [
    AppComponent,
    SampleFormComponent,
    MaterialFormComponent,
    WelcomeDialog,
    TableComponent,
    EditDialog
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialExampleModule,
    MatNativeDateModule,
    HttpClientModule ,
    
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
