import { Component } from '@angular/core';
import { CartService } from '../../../services/cart.service';

@Component({
  selector: 'app-product-list',
  imports: [],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {

  products:{id:number,name:string,price:number}[] = [
    {
      id:1,
      name:'Laptop',
      price:10000
    }
  ]
  constructor(private cartService:CartService){}
}
