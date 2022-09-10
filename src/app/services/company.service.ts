import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";
import { CompanyDataItem } from "../model/company.model";
import { EmployeeDataItem } from "../model/employees.model";

@Injectable({
  providedIn: "root",
})
export class CompanyService {
  url = "http://localhost:3000/company/";

  updateCompany = new Subject();

  constructor(private http: HttpClient) {}

  getCompanyDetail(id) {
    let url = `${this.url}${id}`;
    return this.http.get(url)
  }

  getAllCompany(): Observable<CompanyDataItem[]> {
    return this.http.get<CompanyDataItem[]>(this.url);
  }

  addCompany(data) {
    console.log(data);
    return this.http.post(this.url, data).subscribe();
  }

  modifyCompany(data) {
    let url = `${this.url}${data.id}`;
    return this.http.put(url, data).subscribe((res) => {
      console.log(res);
    });
  }

  deleteCompany(id) {
    let url = `${this.url}${id}`;
    return this.http.delete(url).subscribe((res) => {
      console.log("deleted: " + res);
    });
  }
}
