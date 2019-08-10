import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GamesComponent } from './game/games.component';
import { FormsModule } from '@angular/forms';
import { WelcomeComponent } from './welcome/welcome.component';
import {AngularFontAwesomeModule} from 'angular-font-awesome';
import {RouterModule} from '@angular/router';
import { CompaniesComponent } from './company/companies.component';
import { CompanyComponent } from './company/company.component';
import { GameComponent } from './game/game.component';
import {HttpClientModule} from '@angular/common/http';
import { ShopComponent } from './shop/shop.component';
import { SignInComponent } from './account/sign-in.component';
import { SignUpComponent } from './account/sign-up.component';

@NgModule({
  declarations: [
    AppComponent,
    GamesComponent,
    GameComponent,
    WelcomeComponent,
    CompaniesComponent,
    CompanyComponent,
    ShopComponent,
    SignInComponent,
    SignUpComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFontAwesomeModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'games', component: GamesComponent },
      { path: 'games/:id',component: GameComponent },
      { path: 'companies',component:CompaniesComponent},
      { path: 'companies/:id',component:CompanyComponent},
      { path: 'create',component:CompanyComponent},
      { path: 'shop/:id',component:ShopComponent},
      { path: 'home',component:WelcomeComponent},
      {path:'signIn',component:SignInComponent},
      {path:'signUp',component:SignUpComponent},
      { path: '',redirectTo:"home",pathMatch:"full"},
      { path: '**',redirectTo:"home",pathMatch:"full"}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
