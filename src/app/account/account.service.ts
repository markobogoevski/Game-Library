import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { User } from './user';
import * as fs from "fs";

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  private url:string="app/account/accounts.json";

  constructor(private http:HttpClient) { }

  createAccount(user:User){
    const fs = require('fs');
    fs.writeFileSync(this.url,JSON.stringify(user),null);
  }

  handleError(handleError: HttpErrorResponse){
    return throwError(handleError);
  }
  
}
