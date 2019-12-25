import { Injectable } from '@angular/core';
import Product from '../model/Product';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RechercheService {
  readonly baseURL = 'http://localhost:3000/api/recherche';
  products: Array < Product > = [] ;
  constructor(private http: HttpClient) {}
  recherche(critere) {
    this.http.post(this.baseURL, critere)
      .toPromise()
      .then(res => (this.products = res as Product[]));
}}
