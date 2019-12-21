import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { PanierComponent } from './panier/panier.component';
import { HomeComponent } from './home/home.component';
import { CatalogueComponent } from './catalogue/catalogue.component';
import { OldHomeComponent } from './old-home/old-home.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "old", component: OldHomeComponent},
  { path: "catalogue", component: CatalogueComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
