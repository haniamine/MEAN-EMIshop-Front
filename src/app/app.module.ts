import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { MatSidenavModule } from "@angular/material/sidenav";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ListeproduitComponent } from "./Old/listeproduit/listeproduit.component";
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
import { LoginComponent } from "./Old/login/login.component";
import { FeatureSliderComponent } from "./feature-slider/feature-slider.component";
import { ProductGridComponent } from "./product-grid/product-grid.component";
import { FooterComponent } from "./footer/footer.component";
import { HeaderComponent } from "./header/header.component";
import { HomeComponent } from './home/home.component';
import { CatalogueComponent } from './catalogue/catalogue.component';
import { OldHomeComponent } from './old-home/old-home.component';
import { ProductComponent } from './product/product.component';

const appRoutes: Routes = [
  { path: "", component: HomeComponent },
  { path: "old", component: ListeproduitComponent},
  { path: "catalogue", component: CatalogueComponent }];
@NgModule({
  declarations: [
    AppComponent,
    ListeproduitComponent,
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
    OldHomeComponent,
    ProductComponent
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
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [],
  entryComponents: [PanierComponent, LoginComponent]
})
export class AppModule {}
