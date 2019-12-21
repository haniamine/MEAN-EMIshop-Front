import { isBoolean } from "util";

export default class Product {
  _id: string;
  title: string;
  description: string;
  price: number;
  like: number;
  dislike: number;
  categorie: string;
  picUrl: string;

  constructor(
    _id: string,
    title: string,
    description: string,
    price: number,
    like: number,
    dislike: number,
    categorie: string,
    picUrl: string
  ) {
    this._id = _id;
    this.title = title;
    this.description = description;
    this.price = price;
    this.like = like;
    this.dislike = dislike;
    this.categorie = categorie;
    this.picUrl = picUrl;
  }
}
