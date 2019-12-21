import { Component, OnInit } from '@angular/core';
import Product from '../../shared/model/Product';
import {ProductService} from '../../shared/services/product.service';


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
    alert('le produit: a ete ajouter au panier');}


}
