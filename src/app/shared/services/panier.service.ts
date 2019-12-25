import { Injectable } from '@angular/core';
import Product from "../model/Product";
import PanierItem from "../model/PanierItem";
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PanierService {
  panier: Array<PanierItem>=[];


  readonly baseURL = "http://localhost:3000/api/command";

  constructor(private http: HttpClient) { }
  getAll():Array<PanierItem>{
    return this.panier;
  }
  add(product:Product):void{
    let item = new PanierItem(product,1);
    this.panier.push(item);
  }
  remove(product: Product): void {
    this.panier.splice(this.panier.indexOf(this.panier.filter(c => c.product === product)[0]), 1 );
    console.log(this.panier);
  }
  aqte (p:PanierItem):void{
    this.panier[this.panier.indexOf(p)].qte+=1;
  }
  mqte (p:PanierItem):void{
    this.panier[this.panier.indexOf(p)].qte-=1;
  }
  get (p:PanierItem):PanierItem{
    return this.panier[this.panier.indexOf(p)];
  }
  command(command: any) {
    this.http.post(this.baseURL, command).subscribe(c => console.log(c)); }}
