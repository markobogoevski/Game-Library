import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  private creatorName:string = "Marko Bogoevski";
  private pageName:string="GameInfo Library";
  private gitUrl:string="https://github.com/markobogoevski/Game-Library";
  private linkedinUrl:string="https://linkedin.com/markobogoevski";
  
  constructor() { }

  ngOnInit() {
  }

}
