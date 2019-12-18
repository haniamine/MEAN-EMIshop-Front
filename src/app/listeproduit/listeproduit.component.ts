import { Component, OnInit } from '@angular/core';
import Product from '../model/Product';
import {ProductService} from '../services/product.service';


@Component({
  selector: 'app-listeproduit',
  templateUrl: './listeproduit.component.html',
  styleUrls: ['./listeproduit.component.scss']
})
export class ListeproduitComponent implements OnInit {
produits  : Array <Product> = [];


  constructor(private productService: ProductService ) {

  }

  ngOnInit() {
  this.produits=this.productService.getAll();
  }
  affiche(data: Product){
    alert('le produit: '+data.name+' a ete ajouter au panier');}


}
