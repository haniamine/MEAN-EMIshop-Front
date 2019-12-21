import { Injectable } from "@angular/core";
import Product from "../model/Product";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class ProductService {
  selectedItem: Product;
  produits: Product[];
  sliderProduct: Product[];
  readonly baseURL = "http://localhost:3000/api/product";

  constructor(private http: HttpClient) {}

  getAll() {
    this.http
      .get(this.baseURL)
      .toPromise()
      .then(res => (this.produits = res as Product[]))
      .then(res => (this.sliderProduct = this.produits.slice(0,Math.min(3,this.produits.length))));

  }
  getById(id: string) {
    this.http
      .get(this.baseURL + `/${id}`)
      .toPromise()
      .then(res => (this.selectedItem = res as Product));
  }

  postFilm(product: Product) {
    return this.http.post(this.baseURL, product);
  }

  putProduct(product: Product) {
    return this.http.put(this.baseURL + `/${product._id}`, product);
  }

  deleteProduct(id: string) {
    return this.http.delete(this.baseURL + `/${id}`);
  }
}
