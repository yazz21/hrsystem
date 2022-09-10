import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Observable } from "rxjs";
import { CompanyService } from "src/app/services/company.service";

@Component({
  selector: "app-company-detail",
  templateUrl: "./company-detail.component.html",
  styleUrls: ["./company-detail.component.css"],
})
export class CompanyDetailComponent implements OnInit {
  companyId: number;
  companyData: Observable<any>;

  constructor(
    private companyService: CompanyService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((params) => {
      console.log(params);
      let id = parseInt(this.activatedRoute.snapshot.paramMap.get("id"));
      this.companyId = id;
    });

    console.log(this.companyId);
    this.companyData = this.companyService.getCompanyDetail(this.companyId);
    console.log(this.companyData);
  }
}
