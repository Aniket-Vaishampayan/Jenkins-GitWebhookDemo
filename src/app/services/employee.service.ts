import { Injectable } from "@angular/core";
import { Employee } from "../model/employee.model";
import { Observable } from "rxjs";
import { ColumnMetadata } from "../model/columnmetadata.model";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";

@Injectable({
    providedIn: 'root'
  })
  export class EmployeeService {
  private baseUrl = environment.baseUrl;
  private dataTableUrl = environment.dataTableUrl;

   //private dataTableUrl = 'http://192.168.1.19:7777/employee/testemp/list';
  
    constructor(private http: HttpClient) {}
  
    getEmployees(): Observable<Employee[]> {
      return this.http.get<Employee[]>(`${this.baseUrl}/list`);
    }
  
    saveEmployee(employee: Employee): Observable<Employee> {
      return this.http.post<Employee>(`${this.baseUrl}/save`, employee);
    }
  
    getDataTableMetadata(): Observable<ColumnMetadata[]> {
      return this.http.get<ColumnMetadata[]>(this.dataTableUrl);
    }
  }
