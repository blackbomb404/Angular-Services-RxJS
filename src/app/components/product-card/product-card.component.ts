import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { ShoppingCartService } from '../../services/shopping-cart.service';
import CartItem from '../../models/cart-item.model';
import { Observable, Subscription, find, last, map } from 'rxjs';
import { AsyncPipe, JsonPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [JsonPipe, FormsModule],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent implements OnInit, OnDestroy {
  @Input({ required: true }) id!: number;
  @Input({ required: true }) name!: string;
  @Input({ required: true }) price!: number;
  onCart: boolean = false;
  amount: number = 0;
  private subscription!: Subscription;

  constructor(private cartService: ShoppingCartService){
  }
  ngOnInit(): void {
    this.subscription = this.cartService.items$.pipe(
      map(items => items.find(item => item.product.id === this.id)?.amount)
    ).subscribe(amount => {
      this.onCart = amount !== undefined;
      this.amount = amount ?? 0;
    });
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  addToCart(){
    const cartItem: CartItem = {
      product: {
        id: this.id,
        name: this.name,
        price: this.price
      },
      amount: 1
    };
    this.cartService.addToCart(cartItem);
  }
  updateAmount(){
    this.cartService.updateAmount(this.id, this.amount);
  }

  removeFromCart(){
    this.cartService.removeFromCart(this.id);
  }
}
