import { Component, OnInit } from "@angular/core";
import { ProductService } from "../shared/services/product.service";
import { PanierService } from '../shared/services/panier.service';
import Product from '../shared/model/Product';
import { Router } from '@angular/router';

@Component({
  selector: "app-feature-slider",
  templateUrl: "./feature-slider.component.html",
  styleUrls: ["./feature-slider.component.scss"]
})
export class FeatureSliderComponent implements OnInit {
  activated: boolean = true;
  constructor(private productService: ProductService,private panierService:PanierService,private router: Router) {}
  ngOnInit() {
    this.productService.getAll();
  }
  onSelect(product :Product) {
    this.panierService.add(product);
  }
  getDetails(id: string) {
    this.router.navigateByUrl("/details"+ `:${id}`);
  }
}
