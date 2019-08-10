import { Component, OnInit, OnDestroy } from '@angular/core';
import { Game } from './game';
import { GameDataService } from './game-data.service';
import { Subscription } from 'rxjs';
import { stringify } from 'querystring';
import { Router } from '@angular/router';

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
  private pageTitle:string="Games: ";
  private listFilter:string="";
  private showingImages:boolean=true;
  private imageWidth:number=200;
  private imageHeight:number=this.imageWidth*9/8;
  private sortingCriteria:string="GameName"

  constructor(private router:Router,private gameService:GameDataService) { }

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

  Sort(option:string):void{
    if(this.sortingCriteria==="GameName")
    this.SortByName(option);
    else if(this.sortingCriteria==="ReleaseDate")
    this.SortByDate(option);
    else if(this.sortingCriteria==="Rating")
    this.SortByRating(option);
    else if(this.sortingCriteria==="Price")
    this.SortByPrice(option);
    else if(this.sortingCriteria==="Popularity")
    this.SortByPopularity(option);
    else
      return;
    }

  SortByDate(option: string) {
    if(option==='ascending'){
      this.games.sort((g1,g2)=>{
        g1.actualReleaseDate=new Date(g1.releaseDate);
        g2.actualReleaseDate=new Date(g2.releaseDate);
        if (g1.actualReleaseDate > g2.actualReleaseDate) {
          return 1;
      }  
      if (g1.actualReleaseDate < g2.actualReleaseDate) {
          return -1;
      }
      return 0;
      });
    }else{
      this.games.sort((g1,g2)=>{
        g1.actualReleaseDate=new Date(g1.releaseDate);
        g2.actualReleaseDate=new Date(g2.releaseDate);
        if (g1.actualReleaseDate < g2.actualReleaseDate) {
          return 1;
      }  
      if (g1.actualReleaseDate > g2.actualReleaseDate) {
          return -1;
      }
      return 0;
      });
    }
  }

  SortByPopularity(option: string) {
    if(option==='ascending'){
      this.games.sort((g1,g2)=>g1.popularity-g2.popularity);
    }else{
      this.games.sort((g1,g2)=>g2.popularity-g1.popularity);
    }
  }
  SortByPrice(option: string) {
    if(option==='ascending'){
      this.games.sort((g1,g2)=>g1.price-g2.price);
    }else{
      this.games.sort((g1,g2)=>g2.price-g1.price);
    }
  }
  SortByRating(option: string) {
    if(option==='ascending'){
      this.games.sort((g1,g2)=>g1.rating-g2.rating);
    }else{
      this.games.sort((g1,g2)=>g2.rating-g1.rating);
    }
  }
  SortByName(option: string) {
    if(option==='ascending'){
      this.games.sort((g1,g2)=>{
        if (g1.name > g2.name) {
          return 1;
      }  
      if (g1.name < g2.name) {
          return -1;
      }
      return 0;
      });
    }else{
      this.games.sort((g1,g2)=>{
        if (g1.name < g2.name) {
          return 1;
      }  
      if (g1.name > g2.name) {
          return -1;
      }
      return 0;
      });
    }
  }

  buyGame(gameId:number):void{
    this.router.navigate(['/shop',gameId]);
  }

}
