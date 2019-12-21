import { Injectable } from "@angular/core";
import Product from "../model/Product";

@Injectable({
  providedIn: "root"
})
export class ProductService {
  produit1: Product = new Product(
    "id1",
    "iphone XR",
    "bon telephone",
    1500,
    10,
    2,
    "telephone",
    "https://www.cdiscount.com/pdt2/o/i/r/1/700x700/iphonexr128noir/rw/apple-iphone-xr-noir-128-go.jpg"
  );
  produit2: Product = new Product(
    "id2",
    "Swatch",
    "suisse",
    1000,
    120,
    2,
    "montre",
    "https://ma.jumia.is/5Kap-h5IgClnjQxtQfrW7tE_jrs=/fit-in/500x500/filters:fill(white)/product/99/553823/1.jpg?9726"
  );
  produit3: Product = new Product(
    "id3",
    "Samsung 50\"",
    "GRande tele",
    600,
    20,
    1,
    "Television",
    "https://bonmarche.mg/images/201711/goods_img/5793_P_1510190031205.jpg"
  );
  listproduct: Array<Product> = [this.produit1, this.produit2, this.produit3];
  constructor() {}
  add(product: Product): void {
    this.listproduct.push(product);
  }
  get(id: string): Product {
    return this.listproduct.find(p => {
      return p._id === id;
    });
  }
  getAll(): Array<Product> {
    return this.listproduct;
  }
}
