import { Component, OnInit } from '@angular/core';
import { Game } from './game';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  private game:Game;
  constructor() { }

  ngOnInit() {
  }

}
