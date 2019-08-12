import { Component, OnInit, OnDestroy, EventEmitter, Output } from '@angular/core';
import { User } from './user';
import { NgForm } from '@angular/forms';
import { AccountService } from './account.service';
import { CommunicationService } from '../shared/communication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit, OnDestroy {
 
  email:string;
  password:string;
  retrievedUser:User;
  submitted:boolean=false;
  emailInvalid:boolean=false;
  emailMessage:string="";
  passwordInvalid:boolean=false;
  passwordMessage:string="";

  @Output() userLoggedIn:EventEmitter<User>=new EventEmitter<User>();

  constructor(private router:Router,private accountService:AccountService,
    private commService:CommunicationService) { }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.emailInvalid=false;
    this.emailMessage="";
    this.passwordInvalid=false;
    this.passwordMessage="";
    this.submitted=false;
  }

  onSubmit(form:NgForm){
    this.submitted=true;
    if(form.valid){
    let error=this.accountService.logAccount(this.email,this.password);
    if(error.result){
      this.emailInvalid=true;
      this.emailMessage=error.errorMessage;
    }else{
      if(error.passwordResult){
        this.emailInvalid=false;
        this.emailMessage="";
        this.passwordInvalid=true;
        this.passwordMessage=error.errorPasswordMessage;
      }else{
        this.emailInvalid=false;
        this.emailMessage="";
        this.passwordInvalid=false;
        this.passwordMessage="";
        this.submitted=false;
        this.commService.updateData(true);
        this.retrievedUser=error.user;
        this.userLoggedIn.emit(this.retrievedUser);
        form.resetForm();
        alert("Logged in successfully!");
        console.log("Welcome user: ",this.retrievedUser);
        this.router.navigate(['/home']);
      }
    }
    }
  }


}
