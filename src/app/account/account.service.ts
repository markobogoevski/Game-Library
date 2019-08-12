import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { User } from './user';
import { MyError } from './error';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  private url:string="app/account/accounts.json";

  constructor(private http:HttpClient) { }

  createAccount(user:User):MyError{
    let key=user.emailAdress;
    if(localStorage.length>0){
      for (let i = 0; i < localStorage.length; i++){
        let innerKey = localStorage.key(i);
        if(innerKey===key)
        {
          let error=new MyError();
          error.errorMessage="There is already an account with that email adress";
          error.result=true;
          return error;
        }
      }
    }
    localStorage.setItem(key,JSON.stringify(user));
    let error=new MyError();
    error.errorMessage="";
    error.result=false;
    return error;
  }

  logAccount(emailAdress:string,password:string):MyError{
    let key=emailAdress;
    let error=new MyError();
    if(localStorage.length>0){
      let account=JSON.parse(localStorage.getItem(key)) as User;
      if(account==null){
        error.result=true;
        error.errorMessage="There is no account with that email adress!";
      }else{
        let myPass=account.password;
        if(myPass!==password){
          error.passwordResult=true;
          error.errorPasswordMessage="Password isn't correct!";
        }else{
          error.user=account;
          error.result=false;
        }
      }
    }
    else{
      error.result=true;
      error.errorMessage="There is no account with that email adress!";
    }
   
    return error;
  }

  handleError(handleError: HttpErrorResponse){
    return throwError(handleError);
  }
  
}
