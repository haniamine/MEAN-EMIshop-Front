import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

import Product from "../model/Product";
import {PanierService} from "../services/panier.service";
@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {

  counter:number=0;
  @Input() product :Product;
  constructor(private panierService:PanierService) {
  }
  ngOnInit() {
  }
  etat():string{
    if(this.product.isDisponible) return "on stock";
    else return "epuiser";
  }
  changeetat():void{
    this.product.isDisponible=!this.product.isDisponible;
  }
  like():void{
    this.counter++;
  }
  dislike():void{
    this.counter--;
  }
 @Output()  productselected = new EventEmitter<Product>();
  onSelect(){
    this.productselected.emit(this.product);
    this.panierService.add(this.product);
  }

}
