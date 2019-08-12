import { Component, OnInit } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  private user:User;
  
  constructor() { }

  ngOnInit() {
  }

}
