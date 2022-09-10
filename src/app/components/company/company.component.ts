import { LiveAnnouncer } from "@angular/cdk/a11y";
import { AfterViewInit, Component, OnInit, ViewChild } from "@angular/core";
import {
  MatDialog,
  MatPaginator,
  MatSort,
  MatTableDataSource,
  Sort,
} from "@angular/material";
import { ActivatedRoute, Route, Router } from "@angular/router";
import { element } from "protractor";
import { Observable } from "rxjs";
import { CompanyDataItem } from "src/app/model/company.model";
import { CompanyService } from "src/app/services/company.service";
import { AddCompanyDialogboxComponent } from "../add-company-dialogbox/add-company-dialogbox.component";
import { DeleteCompanyDialogboxComponent } from "../delete-company-dialogbox/delete-company-dialogbox.component";

@Component({
  selector: "app-company",
  templateUrl: "./company.component.html",
  styleUrls: ["./company.component.css"],
})
export class CompanyComponent implements OnInit {
  $Companys: Observable<CompanyDataItem[]>;
  dataSource;

  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  newName;
  oldName;

  constructor(
    private companyService: CompanyService,
    private activatedroute: Router,
    public dialog: MatDialog,
    private router: Router
  ) {}

  displayedColumns: string[] = ["id", "name", "detail", "edit", "delete"];

  ngOnInit() {
    this.companyService.getAllCompany().subscribe((res) => {
      this.dataSource = new MatTableDataSource(res);
    });
  }

  openDialog(data): void {
    console.log(data);

    const dialogRef = this.dialog.open(AddCompanyDialogboxComponent, {
      width: "400px",
      data: data,
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log("newName = " + result);

      if (result) {
        this.companyService.modifyCompany(result);
      }
    });
  }



  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  Delete(deleteData) {
    console.log(deleteData);
    const dialogRef = this.dialog.open(DeleteCompanyDialogboxComponent, {
      width: "400px",
      data: deleteData,
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(result);

      if (result) {
        this.companyService.deleteCompany(deleteData.id);
      }
    });
  }

  onSelectItem(data) {
    this.router.navigate(["/company", data.id]);
  }

}
