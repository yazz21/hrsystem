import { Component, OnInit } from "@angular/core";
import { MatTableDataSource } from "@angular/material";
import { Router } from "@angular/router";
import { CompanyService } from "src/app/services/company.service";
import { NewsService } from "src/app/services/news.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit {
  companydata: any;
  newsdata: any;

  constructor(
    private companyService: CompanyService,
    private newsservice: NewsService,
    private router: Router
  ) {}

  ngOnInit() {
    this.companyService.getAllCompany().subscribe((res) => {
      this.companydata = res;
      console.log(this.companydata);
    });

    this.newsservice.getAllNews().subscribe((res) => {
      this.newsdata = res;
    });
  }

  onSelectItem(data) {
    this.router.navigate(["/newsandevents", data.id]);
  }

  onSelectCompany(data) {
    this.router.navigate(["/company", data.id]);
  }
}
