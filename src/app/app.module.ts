import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {MatSidenavModule} from '@angular/material/sidenav';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ListeproduitComponent} from './listeproduit/listeproduit.component';
import {ProductItemComponent} from './product-item/product-item.component';
import {FormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import  {MatCardModule} from "@angular/material";
import {MatButtonModule} from '@angular/material/button';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { EditproductComponent } from './editproduct/editproduct.component';
import { PanierComponent } from './panier/panier.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import {MatTableModule} from "@angular/material";
const appRoutes: Routes = [
  {path: 'produits', component: ListeproduitComponent},
  {path: 'produits/:id', component : EditproductComponent},
  {path: 'panier',component : PanierComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    ListeproduitComponent,
    ProductItemComponent,
    NavBarComponent,
    EditproductComponent,
    PanierComponent
  ],
  bootstrap: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatSliderModule,
    MatButtonModule,
    MatCardModule,
    RouterModule.forRoot(
      appRoutes,
      {enableTracing: true} // <-- debugging purposes only
    ),
    BrowserAnimationsModule,
    MatSidenavModule,
    MatTableModule
  ],
  providers: [],
})


export class AppModule {
}
