import { Component, OnInit } from '@angular/core';
import { ProductService } from '../shared/services/product.service';

@Component({
  selector: 'app-feature-slider',
  templateUrl: './feature-slider.component.html',
  styleUrls: ['./feature-slider.component.scss']
})
export class FeatureSliderComponent implements OnInit {

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.productService.getSlider()
    }

}
