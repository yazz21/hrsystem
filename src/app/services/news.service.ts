import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class NewsService {
  url = "http://localhost:3000/news/";
  constructor(private http: HttpClient) {}

  getAllNews(): Observable<any[]> {
    return this.http.get<any[]>(this.url);
  }

  getonenews(id: any): Observable<any[]> {
    return this.http.get<any[]>(this.url + `${id}`);
  }
}
