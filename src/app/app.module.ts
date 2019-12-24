import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { MatSidenavModule } from "@angular/material/sidenav";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { NgxNavbarModule } from "ngx-bootstrap-navbar";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import {
  MatDialogModule,
  MatFormFieldModule,
  MatInputModule,
  MatMenuModule
} from "@angular/material";
import { MatCardModule } from "@angular/material";
import { MatButtonModule } from "@angular/material/button";
import { NavBarComponent } from "./Old/nav-bar/nav-bar.component";
import { EditproductComponent } from "./Old/editproduct/editproduct.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatSliderModule } from "@angular/material/slider";
import { MatTableModule } from "@angular/material";
import { PanierComponent } from "./panier/panier.component";
import { MenuComponent } from "./Old/menu/menu.component";
import { LoginComponent } from "./login/login.component";
import { FeatureSliderComponent } from "./feature-slider/feature-slider.component";
import { ProductGridComponent } from "./product-grid/product-grid.component";
import { FooterComponent } from "./footer/footer.component";
import { HeaderComponent } from "./header/header.component";
import { HomeComponent } from './home/home.component';
import { CatalogueComponent } from './catalogue/catalogue.component';
import { ProductComponent } from './product/product.component';
import { HttpClientModule } from '@angular/common/http';
import { InscriptionComponent } from './inscription/inscription.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { SearchBarComponent } from './search-bar/search-bar.component';

const appRoutes: Routes = [
  { path: "", component: HomeComponent },
  { path: "catalogue", component: CatalogueComponent },
  { path :"inscription", component: InscriptionComponent}];
@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    EditproductComponent,
    PanierComponent,
    MenuComponent,
    LoginComponent,
    FeatureSliderComponent,
    ProductGridComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    CatalogueComponent,
    ProductComponent,
    InscriptionComponent,
    ProductDetailsComponent,
    SearchBarComponent
  ],
  bootstrap: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatSliderModule,
    MatButtonModule,
    MatCardModule,
    NgxNavbarModule,
    MatDialogModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserAnimationsModule,
    MatSidenavModule,
    MatTableModule,
    NgbModule,
    MatMenuModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    HttpClientModule
  ],
  providers: [],
  entryComponents: [PanierComponent, LoginComponent,InscriptionComponent]
})
export class AppModule {}
