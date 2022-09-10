import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EmployeeDataItem } from '../model/employees.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  url = "http://localhost:3000/employee/"

  constructor( private http: HttpClient) { }

  getEmployeeOneTime() {
    return this.http.get(this.url).subscribe((res)=> {
      this.http.post(this.url, res)
    })
  }

  getemployeefromfaker(): Observable<EmployeeDataItem[]> {
    return this.http.get<EmployeeDataItem[]>(this.url)
  }

  createEmployeeFaker(employeeData) {
    return this.http.post(this.url, employeeData).subscribe();
  }

  modifyEmployee(employeeData) {
    let url = `${this.url}${employeeData.id}`
    return this.http.put(url, employeeData).subscribe();
  }

  deleteEmployee(employeeData) {
    let url = `${this.url}${employeeData.id}`
    return this.http.delete(url, employeeData).subscribe(res=> {console.log('deleted: ' + res);})
  }


}
