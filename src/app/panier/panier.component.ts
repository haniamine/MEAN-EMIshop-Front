import { Component, OnInit } from '@angular/core';
import {PanierService} from "../shared/services/panier.service";
import Product from "../shared/model/Product";
import PanierItem from "../shared/model/PanierItem";
import {ɵparseCookieValue} from "@angular/common";

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.scss']
})
export class PanierComponent implements OnInit {
  panier :Array<PanierItem>;
  displayedColumns: string[] = ['name', 'price', 'desc','qte'];
  constructor(private panierService: PanierService) { }

  ngOnInit() {
    this.panier=this.panierService.getAll();
  }
  addQte(p:PanierItem){
    this.panierService.aqte(p);
  }
  minQte(p:PanierItem){
    this.panierService.mqte(p);

  }

}
