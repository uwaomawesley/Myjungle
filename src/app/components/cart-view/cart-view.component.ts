import { Component, Input, OnInit } from '@angular/core';
import { ProductModel } from 'src/app/models/product-model';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart-view',
  templateUrl: './cart-view.component.html',
  styleUrls: ['./cart-view.component.scss'],
})
export class CartViewComponent implements OnInit {
  @Input('prod') productsInCart: ProductModel[] = [];

  constructor(private cartService: CartService) { }

  ngOnInit() {}

  updateQuantity(p:ProductModel, ev:any, index:number):void{
    const updatedInCartValue = ev.target.value;
    this.cartService.updateQuantity(index, updatedInCartValue);
  }
  removeItemFromCart(prod: ProductModel):void{
    this.productsInCart = this.cartService.removeFromCart( prod);

  }

}
