import { Component, OnInit } from '@angular/core';
import { User } from './user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  private retrievedUser:User;
  private imageWidth:number=100;
  private imageHeight:number=this.imageWidth*9/8;
  constructor(private router:Router) { }
  private shippingPrice:number=6.7;

  ngOnInit() {
  }

  onContinueShopping():void{
    this.router.navigate(['/games']);
  }

  gamePrice():number{
    let sum=0;
    this.retrievedUser.purchasedGames
    .forEach(g=>sum+=(g.quantity*g.price));
    return sum;
  }

  onCheckout():void{
    alert("Your order was completed!");
    this.retrievedUser.purchasedGames=null;
  }
}
