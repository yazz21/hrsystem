import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AboutComponent } from "./components/about/about.component";
import { CompanyDetailComponent } from "./components/company-detail/company-detail.component";
import { CompanyComponent } from "./components/company/company.component";
import { ContactComponent } from "./components/contact/contact.component";
import { HomeComponent } from "./components/home/home.component";
import { NewsEventsComponent } from "./components/news-events/news-events.component";
import { NewsFaceComponent } from "./components/news-face/news-face.component";
import { NotFoundComponent } from "./components/not-found/not-found.component";

const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  // { path: "", component: HomeComponent },
  { path: "home", component: HomeComponent },
  { path: "company", component: CompanyComponent },
  { path: "contact", component: ContactComponent },
  { path: "about", component: AboutComponent },
  {
    path: "company",
    loadChildren: () =>
      import("./components/add-company/add-company.module").then(
        (m) => m.AddCompanyModule
      ),
  },
  { path: "company/:id", component: CompanyDetailComponent },
  {
    path: "company:/id",
    loadChildren: () =>
      import(
        "./components/company-nested-detail/company-nested-detail.module"
      ).then((m) => m.CompanyNestedDetailModule),
  },
  { path: "company/:id/:employee", component: CompanyDetailComponent },
  { path: "newsandevents", component: NewsEventsComponent },
  { path: "newsandevents/:id", component: NewsFaceComponent },
  { path: "**", component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
