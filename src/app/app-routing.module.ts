import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { PanierComponent } from './panier/panier.component';
import { HomeComponent } from './home/home.component';
import { CatalogueComponent } from './catalogue/catalogue.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { AjoutProduitComponent } from './ajout-produit/ajout-produit.component';
import { RechercheComponent } from './recherche/recherche.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { CommandGridComponent } from './command-grid/command-grid.component';
import { CommandDetailsComponent } from './command-details/command-details.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "catalogue", component: CatalogueComponent },
  { path: "details/:id", component: ProductDetailsComponent },
  { path: "profile", component: UserProfileComponent },
  { path: "commandes", component: CommandGridComponent },
  { path: "commande/:id", component: CommandDetailsComponent },
  { path :"catalogue/:search", component: RechercheComponent},
  {path: 'addproduct', component: AjoutProduitComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
