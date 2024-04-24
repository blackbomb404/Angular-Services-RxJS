import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import CartItem from '../models/cart-item.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {
  private items = new BehaviorSubject<CartItem[]>([]);
  items$ = this.items.asObservable();

  constructor() { }

  get cartItems(): CartItem[]{
    return this.items.getValue();
  }

  private set cartItems(cartItems: CartItem[]){
    this.items.next(cartItems);
  }

  addToCart(cartItem: CartItem){
    this.cartItems = [
      ...this.cartItems,
      { product: { ...cartItem.product }, amount: cartItem.amount }
    ];
  }
  updateAmount(productId: number, amount: number){
    this.cartItems = this.cartItems.map(item => {
      if(item.product.id === productId){
        item.amount = amount;
      }
      return item;
    })
  }
  removeFromCart(productId: number){
    this.cartItems = this.cartItems.filter(item => item.product.id !== productId);
  }
}
