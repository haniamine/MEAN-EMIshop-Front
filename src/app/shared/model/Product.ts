import { isBoolean } from "util";

export default class Product {
  _id: string;
  title: string;
  desc: string;
  price: number;
  like: number;
  dislike: number;
  categorie: string;
  picUrl: string;

  constructor(
    _id: string,
    title: string,
    desc: string,
    price: number,
    like: number,
    dislike: number,
    categorie: string,
    picUrl: string
  ) {
    this._id = _id;
    this.title = title;
    this.desc = desc;
    this.price = price;
    this.like = like;
    this.dislike = dislike;
    this.categorie = categorie;
    this.picUrl = picUrl;
  }
}
