import { Component, OnInit } from "@angular/core";
import { ProductService } from "../shared/services/product.service";
import { ActivatedRoute, Router, ParamMap } from "@angular/router";
import Product from '../shared/model/Product';
import {PanierService} from '../shared/services/panier.service';

@Component({
  selector: "app-product-details",
  templateUrl: "./product-details.component.html",
  styleUrls: ["./product-details.component.scss"]
})
export class ProductDetailsComponent implements OnInit {
  product:Product
  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router,
    private panierService: PanierService
  ) {}

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
    this.productService.getById(id);
  }

  like(prod:Product){
    prod.like++;
    return this.productService.putLike(prod);
  }
  dislike(prod:Product){
    prod.dislike++;
    return this.productService.putDislike(prod)
  }
  onSelect(){
    this.panierService.add(this.productService.selectedItem);
  }
}
