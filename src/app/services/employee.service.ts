import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ICreateEmployee, IEmployee } from '../model/interface/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) { }

  apiURL = "http://0.0.0.0:8000";

  /**
   * Send a GET request to retrive all employee.
   * @returns Observable<IEmployee[]> - An observable containing a list with all employees.
   */
  getAllEmployee(): Observable<IEmployee[]> {
    return this.http.get<IEmployee[]>(this.apiURL + "/employee/read-all");
  }

  /**
   * Send a POST request to create a new employee.
   * @param employee ICreateEmloyee - data of the new employee.
   * @returns Observable<string> - An observable containing a message about the creation status.
   */
  createEmployee(employee: ICreateEmployee): Observable<string> {
    return this.http.post<string>(this.apiURL + "/employee/create", employee);
  }

}
