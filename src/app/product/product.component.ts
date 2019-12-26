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
  }
  like(prod:Product){
    let i = this.productService.produits.indexOf(prod)
    this.productService.produits[i].like++;
    return this.productService.putLike(prod);
  }
  dislike(prod:Product){
    let i = this.productService.produits.indexOf(prod)
    this.productService.produits[i].dislike++;
    return this.productService.putDislike(prod)
  }
  onSelect(){
    this.panierService.add(this.product);
  }
  onDelete(id: string) {
    if (confirm("Are you sure to delete this record?")) {
      this.productService.deleteProduct(id).subscribe(res => {
        this.productService.getAll();
      });
    }
  }

}
