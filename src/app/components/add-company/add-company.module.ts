import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AddCompanyComponent } from "./add-company.component";
import { RouterModule, Routes } from "@angular/router";
import {
  MatButtonModule,
  MatSelectModule,
  MatOptionModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
} from "@angular/material";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

const routes: Routes = [
  {
    path: "add-company",
    component: AddCompanyComponent,
  },
];

@NgModule({
  declarations: [AddCompanyComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
  MatOptionModule,
  ],
})
export class AddCompanyModule {}
