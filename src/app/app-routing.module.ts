import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { PanierComponent } from './panier/panier.component';
import { HomeComponent } from './home/home.component';
import { CatalogueComponent } from './catalogue/catalogue.component';
import { ProductDetailsComponent } from './product-details/product-details.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "catalogue", component: CatalogueComponent },
  { path: "details/:id", component: ProductDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
