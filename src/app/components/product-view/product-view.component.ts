import { Component } from '@angular/core';
import Product from '../../models/product.model';
import { ProductCardComponent } from '../product-card/product-card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-view',
  standalone: true,
  imports: [CommonModule, ProductCardComponent],
  templateUrl: './product-view.component.html',
  styleUrl: './product-view.component.css'
})
export class ProductViewComponent {
  products: Product[] = [
     { id: 1, name: 'product 1', price: 2000 },
     { id: 2, name: 'product 2', price: 2500 },
     { id: 3, name: 'product 3', price: 3000 },
     { id: 4, name: 'product 4', price: 3500 },
     { id: 5, name: 'product 5', price: 4000 },
     { id: 6, name: 'product 6', price: 5500 },
     { id: 7, name: 'product 7', price: 7000 },
     { id: 8, name: 'product 8', price: 8000 },
     { id: 9, name: 'product 9', price: 9500 },
     { id: 10, name: 'product 10', price: 10_000 },
  ];
  viewMode: 'grid' | 'list' = 'grid';
}
