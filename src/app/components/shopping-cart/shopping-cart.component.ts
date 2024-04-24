import { Component } from '@angular/core';
import Product from '../../models/product.model';
import { ShoppingCartService } from '../../services/shopping-cart.service';
import CartItem from '../../models/cart-item.model';
import { Observable } from 'rxjs';
import { AsyncPipe, JsonPipe } from '@angular/common';
import { CartTotalPipe } from '../../pipes/cart-total.pipe';

@Component({
  selector: 'app-shopping-cart',
  standalone: true,
  imports: [AsyncPipe, JsonPipe, CartTotalPipe],
  templateUrl: './shopping-cart.component.html',
  styleUrl: './shopping-cart.component.css'
})
export class ShoppingCartComponent {
  items$!: Observable<CartItem[]>;

  constructor(private cartService: ShoppingCartService){
    this.items$ = cartService.items$;
  }

}
