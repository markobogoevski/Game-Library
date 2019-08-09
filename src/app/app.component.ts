import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  searchField:string="";
  signedIn:boolean=false;
  activation:string="";
  title:string = 'GameInfo Library';

  onSearch(){

  }

  changeActivation(activate:string):void{
    this.activation=activate;
  }

  onSignIn():void{
    console.log('asdasd');
    this.signedIn=true;
  }

  onSignOut():void{
    console.log('asdasd');
    this.signedIn=false;
  }
}
