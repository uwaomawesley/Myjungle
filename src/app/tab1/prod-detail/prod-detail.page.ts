import { CartService } from './../../services/cart.service';
import { Component, OnInit } from '@angular/core';
import { ProductModel } from './../../models/product-model';
import {ProductService} from '../../services/product.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-prod-detail',
  templateUrl: './prod-detail.page.html',
  styleUrls: ['./prod-detail.page.scss'],
})
export class ProdDetailPage implements OnInit {
  product: ProductModel;
  showData:boolean = false;
  constructor(private route: ActivatedRoute,
              private productService: ProductService,
              private cartService: CartService) { }

  ngOnInit() :void {
    this.route.data.subscribe( (data: {product: ProductModel}):void => {
      this.product = data.product;
      this.showData = true;
    });
  }
    addProduct(product: ProductModel):void{
      this.cartService.addToCart(product);
    }
  }
