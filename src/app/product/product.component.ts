import { Component, OnInit, Input, Output } from '@angular/core';
import Product from '../shared/model/Product';
import { PanierService } from '../shared/services/panier.service';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  @Input() product :Product;
  constructor(private panierService:PanierService,public dialog:MatDialog) {
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
  like():void{
    //this.counter++;
    alert("liked")
  }
  dislike():void{
    alert("disliked")
  }
  onSelect(){
    this.panierService.add(this.product);
    alert("ajouté au panier!")
  }

}
