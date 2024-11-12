import { Component, OnInit } from '@angular/core';
import { ColumnMetadata } from 'src/app/model/columnmetadata.model';
import { Employee } from 'src/app/model/employee.model';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-employee-table',
  templateUrl: './employee-table.component.html',
  styleUrls: ['./employee-table.component.css']
})
export class EmployeeTableComponent implements OnInit{
  employees: Employee[] = [];
  columns: ColumnMetadata[] = [];

  constructor(private employeeService: EmployeeService) {}

  ngOnInit(): void {
    this.loadEmployees();
  }

  // employee-table.component.ts

getEmployeeProperty(employee: Employee, key: string): any {
  return employee[key as keyof Employee];
}

loadEmployees(): void {
  this.employeeService.getEmployees().subscribe({
    next: (data) => (this.employees = data),
    error: () => alert('Failed to load employees')
  });
}
}
