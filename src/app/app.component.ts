import { Component, OnInit } from '@angular/core';
import { CommunicationService } from './shared/communication.service';
import { User } from './account/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  searchField:string="";
  signedIn:boolean=false;
  activation:string="";
  title:string = 'GameInfo Library';
  loggedInUser:User;

  constructor(private commService:CommunicationService){}


  onSearch(){

  }

  changeActivation(activate:string):void{
    this.activation=activate;
  }

  ngOnInit(): void {
    this.commService.getData().subscribe(
      (val)=>{
        let value=val as boolean;
        this.signedIn=value;
      }
    );
  }

  onSignOut():void{
    this.signedIn=false;
  }

  onActivate(componentReference):void{
    componentReference.signedIn=this.signedIn;
    componentReference.userLoggedIn.subscribe(
      (user)=>this.loggedInUser=user
    );
    componentReference.retrievedUser=this.loggedInUser;
  }

}
