import { Component, OnInit, Input, Output } from '@angular/core';
import Product from '../shared/model/Product';
import { PanierService } from '../shared/services/panier.service';
import { MatDialog } from '@angular/material';
import { ProductService } from '../shared/services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  @Input() product :Product;
  constructor(private panierService:PanierService,private productService:ProductService,public dialog:MatDialog) {
  }

  ngOnInit() {
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
    this.panierService.add(this.product);
  }

}
