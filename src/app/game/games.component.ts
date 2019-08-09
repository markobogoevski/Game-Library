import { Component, OnInit, OnDestroy } from '@angular/core';
import { Game } from './game';
import { GameDataService } from './game-data.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit, OnDestroy{

  private games:Game[];
  private gameSubscriber:Subscription;
  private errorFlag:boolean=false;
  private errorMessage:string="";
  private companyName:string="";
  private companyUid:number;
  private pageTitle:string="Games: ";
  private listFilter:string="";
  private showingImages:boolean=true;

  constructor(private gameService:GameDataService) { }

  ngOnInit() {
    this.gameSubscriber=this.gameService.getGames()
    .subscribe(
      (data)=>{
        this.games=data;
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

  getFilteredGames():Game[]{
    if(this.listFilter===null||this.listFilter==="")
    return this.games;
    else{
    return this.games.filter
    (g=>g.name.toLocaleLowerCase().includes(
      this.listFilter.toLocaleLowerCase()
    ));
    }
  }

  toggleImages():void{
    this.showingImages=!this.showingImages;
  }

}
