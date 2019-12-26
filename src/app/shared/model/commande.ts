import PanierItem from './PanierItem';
import User from './User';
import Product from './Product';
import { HttpClient } from "@angular/common/http";

export class Commande {
    private _user:User;
    private _quantity:number[];
    private _products:Product[];
    private _total:number;



  constructor(user:User,quantity:number[],products:Product[],total:number) {
    this._user = user;
    this._quantity = quantity;
    this._products = products;
    this._total = total;
  }


  get user(): User {
    return this._user;
  }

  set user(value: User) {
    this._user = value;
  }

  get quantity(): number[] {
    return this._quantity;
  }

  set quantity(value: number[]) {
    this._quantity = value;
  }

  get products(): Product[] {
    return this._products;
  }

  set products(value: Product[]) {
    this._products = value;
  }

  get total(): number {
    return this._total;
  }

  set total(value: number) {
    this._total = value;
  }
}
