import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { EmployeeComponent } from './components/forms/employee/employee.component';
import { EmployeeTableComponent } from './components/forms/employee-table/employee-table.component';
import { EmployeeService } from './services/employee.service';
import { Test6Component } from './components/forms/test6/test6.component';
import { Test8Component } from './components/forms/test8/test8.component';
import { Test9Component } from './components/forms/test9/test9.component';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    EmployeeTableComponent,
    Test6Component,
    Test8Component,
    Test9Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
