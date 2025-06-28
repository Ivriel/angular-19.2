import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart:any[] = []

  getCart(): any[]{
    return this.cart
  }

  addToCart(product:any){
    this.cart.push(product)
  }
}
