import { Pipe, PipeTransform } from '@angular/core';
import CartItem from '../models/cart-item.model';

@Pipe({
  name: 'cartTotal',
  standalone: true
})
export class CartTotalPipe implements PipeTransform {

  transform(items: CartItem[] | null, ...args: unknown[]): number {
    if(items === null){
      return 0;
    }
    return items.reduce((total, { product, amount }) => total + product.price * amount, 0);
  }

}
