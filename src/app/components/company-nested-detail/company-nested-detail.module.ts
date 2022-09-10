import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MoreOfCompanyComponent } from "./more-of-company/more-of-company.component";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  { path: "listemployee", component: MoreOfCompanyComponent },
];

@NgModule({
  declarations: [MoreOfCompanyComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class CompanyNestedDetailModule {}
