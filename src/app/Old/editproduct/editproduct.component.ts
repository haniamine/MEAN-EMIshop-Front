import {Component, Input, OnInit} from '@angular/core';
import {ProductService} from '../../shared/services/product.service';
import {ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs';
import Product from '../../shared/model/Product';

// @ts-ignore
// @ts-ignore
@Component({
  selector: 'app-editproduct',
  templateUrl: './editproduct.component.html',
  styleUrls: ['./editproduct.component.scss']
})
export class EditproductComponent implements OnInit {
  product: Product;
  constructor(private route: ActivatedRoute, private productService: ProductService) {}
ngOnInit() {
    const id: string = this.route.snapshot.params['id'];
    this.productService.getById(id);
    }


}
