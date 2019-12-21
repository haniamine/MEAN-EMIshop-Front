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
  etat():string{
    /*if(this.product.isDisponible) return "on stock";
    else return "epuiser";*/
    return "ok"
  }
  changeetat():void{
    //this.product.isDisponible=!this.product.isDisponible;
  }
  like(prod:Product){
    let id= prod._id
    return this.productService.putLike(id);
  }
  dislike(prod:Product){
    return this.productService.putDislike(prod)
  }
  onSelect(){
    this.panierService.add(this.product);
  }

}
