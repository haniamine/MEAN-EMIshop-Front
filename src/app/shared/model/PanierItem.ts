import Product from "./Product";

export default class PanierItem{
  private _product :Product;
  private _qte : number;

  constructor(product: Product, qte: number) {
    this._product = product;
    this._qte = qte;
  }

  get product(): Product {
    return this._product;
  }

  set product(value: Product) {
    this._product = value;
  }

  get qte(): number {
    return this._qte;
  }

  set qte(value: number) {
    this._qte = value;
  }
}
