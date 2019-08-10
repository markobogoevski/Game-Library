import { Component, OnInit, OnDestroy } from '@angular/core';
import { Game } from './game';
import { Router, ActivatedRoute } from '@angular/router';
import { GameDataService } from './game-data.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit, OnDestroy {

  private game:Game;
  private errorFlag:boolean=false;
  private errorMessage:string="";
  private gameSubscriber:Subscription;
  private pageTitle:string="Game description for: "

  constructor(private route:ActivatedRoute, private router:Router,private gameService:GameDataService) { }

  ngOnInit() {
    let gameId=+this.route.snapshot.paramMap.get('id');
    this.gameSubscriber=this.gameService.getGameById(gameId)
    .subscribe(
      (data)=>{
        this.game=data;
        this.errorFlag=false;
        this.errorMessage="";
      },
      (error)=>{
        this.handleError(error);
      },
      ()=>{
        this.gameSubscriber.unsubscribe();
      }
    )
  }

  ngOnDestroy(): void {
    if(this.gameSubscriber!=null&&!this.gameSubscriber.closed)
    this.gameSubscriber.unsubscribe();
  }

  handleError(error: any) {
    alert("I am sorry. There has been some kind of an error. Please try again later, or contact customer support");
    this.errorFlag=true;
    this.errorMessage=error.error.errorMessage;
    console.log(this.errorMessage);
  }

  onBack():void{
    this.router.navigate(['/games']);
  }

  buyGame(gameId:number):void{
    this.router.navigate(['/shop',this.game.id]);
  }

}
