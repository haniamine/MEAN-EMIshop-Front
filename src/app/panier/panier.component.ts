import { Component, OnInit } from '@angular/core';
import {PanierService} from '../shared/services/panier.service';
import Product from '../shared/model/Product';
import PanierItem from '../shared/model/PanierItem';
import {ɵparseCookieValue} from '@angular/common';
import {UserService} from '../shared/services/user.service';
import User from '../shared/model/User';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.scss']
})
export class PanierComponent implements OnInit {
  total = 0;
  user: string = null;
  panier : Array <PanierItem>;
displayedColumns: string[] = ['name', 'price', 'desc', 'qte'];
constructor(private panierService: PanierService, private userService: UserService) { }

ngOnInit() {
    this.panier = this.panierService.getAll();
    this.panier.map((c) => this.total += c.product.price * c.qte);
  }
addQte(p: PanierItem) {
    this.panierService.aqte(p);
    this.total = 0;
    this.panier.map((c) => this.total += c.product.price * c.qte);
  }
minQte(p: PanierItem) {
    this.panierService.mqte(p);
    this.total = 0;
    this.panier.map((c) => this.total += c.product.price * c.qte);

  }
commander() {
  const quantity: Array<number> = [];
  const products: Array<string> = [];
  for (const i in this.panier) {
    quantity[i] = this.panier[i].qte;
    products[i] = this.panier[i].product._id;
  }
  const user = this.userService.user();
  const total = this.total;
  const commande = {
    user,
    quantity,
    products,
    total
  };
  this.panierService.command(commande);
  }

}
