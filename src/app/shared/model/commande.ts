import PanierItem from './PanierItem';
import User from './User';
import Product from './Product';
import { HttpClient } from "@angular/common/http";

export class Commande {
    private user:User;
    private quantity:number[];
    private products:Product[];
    private total:number;



  constructor(user:User,quantity:number[],products:Product[],total:number) {
    this.user = user;
    this.quantity = quantity;
    this.products = products;
    this.total = total;
  }



}
