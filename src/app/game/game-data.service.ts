import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { Game } from './game';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { filter,map,tap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GameDataService {

  private url:string="app/games-factory/games.json";

  constructor(private http:HttpClient) { }

  getGamesByCompany(companyUid:number):Observable<Game[]>{
    return this.http.get<Game[]>(this.url).pipe
    (
      tap(data=>console.log(JSON.stringify(data))),
      catchError(this.handleError),
      map((games:Game[])=>games.filter(g=>g.companyUid===companyUid))
    );
  }

  getGames():Observable<Game[]>{
    return this.http.get<Game[]>(this.url)
    .pipe(
      tap(data=>console.log(JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  getGameById(gameUid:number):Observable<Game>{
    return this.getGames().pipe(
      tap(data=>console.log(JSON.stringify(data))),
      catchError(this.handleError),
      map((games:Game[])=>games.find(g=>g.id===gameUid))
    );
  }

  handleError(handleError: HttpErrorResponse){
    return throwError(handleError);
  }
}
