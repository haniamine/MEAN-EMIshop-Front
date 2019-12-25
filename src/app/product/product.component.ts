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
  liker: number;
  disliker: number;
  constructor(private panierService:PanierService,private productService:ProductService,public dialog:MatDialog) {
  }

  ngOnInit() {
    this.liker = this.product.like;
    this.disliker = this.product.dislike;
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
