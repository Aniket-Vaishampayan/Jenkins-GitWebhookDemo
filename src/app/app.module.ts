import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { EmployeeComponent } from './components/forms/employee/employee.component';
import { EmployeeTableComponent } from './components/forms/employee-table/employee-table.component';
import { EmployeeService } from './services/employee.service';
import { Test2Component } from './components/forms/test2/test2.component';
import { Test3Component } from './components/forms/test3/test3.component';
import { Test5Component } from './components/forms/test5/test5.component';
import { Test6Component } from './components/forms/test6/test6.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    EmployeeTableComponent,
    Test2Component,
    Test3Component,
    Test4Component,
    Test5Component,
    Test6Component

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
