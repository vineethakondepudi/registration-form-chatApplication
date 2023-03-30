import { HttpErrorResponse } from '@angular/common/http';
import { Component, ElementRef, ViewChild } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ChatApplicationService } from '../chat-application.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {
  msg:any;
  loginForm: FormGroup;
PassWord: any;
hidePassword = true;
@ViewChild('messageDiv') messageDiv!: ElementRef;

  constructor(private fb: FormBuilder,private router:Router, private chatService:ChatApplicationService) {
  this.loginForm = new FormGroup({
    Email: new FormControl('', [Validators.required, Validators.email]),
    PassWord: new FormControl('', [Validators.required])
  });  
}
  show(){
      this.chatService.login(this.loginForm.value).subscribe(
      (result:any)=>{
        console.log(result);
        if(result.message="Input matches database"){ 
          this.router.navigate(['search'])      
        }
        else{
          const errorMessage = "Invalid email or password. Please register.";
      this.messageDiv.nativeElement.innerHTML = errorMessage;
        }
      },  
      (error: HttpErrorResponse) => {
        console.error(error);
        const errorMessage = "Invalid email or password. Please try again.";
        this.messageDiv.nativeElement.innerHTML = errorMessage;
      }    
    )    
  }
  forgot(){
    
    this.router.navigate(['forgot'])
    }

   
}
