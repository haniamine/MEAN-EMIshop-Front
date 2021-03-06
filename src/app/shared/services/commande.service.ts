import { Injectable } from '@angular/core';
import { Commande } from '../model/commande';
import Product from '../model/Product';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommandeService {

  selectedCommand: Commande;
  commands: Commande[];
  product: Product;

  readonly baseURL = 'http://localhost:3000/api/command';


  constructor(private http: HttpClient) { }



  getAllCommands() {
    this.http
      .get(this.baseURL)
      .toPromise()
      .then(res => (this.commands = res as Commande[]));
  }

  getCommandsByUsers(id:string) {
    this.http
      .get(this.baseURL+`/user/${id}`)
      .toPromise()
      .then(res => (this.commands = res as Commande[]));
  }
  getDetails(id:string) {
    this.http
      .get(this.baseURL+`/${id}`)
      .toPromise()
      .then(res => (this.selectedCommand = res as Commande));
    console.log(this.selectedCommand);
  }

  getProduct(id:string):Product{
    this.http
      .get('http://localhost:3000/api/product'+`/${id}`)
      .toPromise()
      .then(res => (this.product= res as Product));
      return this.product
  }
}
