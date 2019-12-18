import {isBoolean} from "util";

export default class Product{
  code :string;
  prix : number;
  name:string;
  desc :string;
  url: string;
  isDisponible:boolean=true;

  constructor(code:string,prix:number,name:string,desc:string,isDisponible:boolean,url:string){
    this.name=name;
    this.code=code;
    this.desc=desc;
    this.prix=prix;
    this.url=url;
    this.isDisponible=isDisponible;
  }
}
