import { Component, OnInit } from '@angular/core';
import { User } from '../account/user';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  private retrievedUser:User;
  
  constructor() { }

  ngOnInit() {
  }

}
