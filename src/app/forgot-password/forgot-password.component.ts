import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ChatApplicationService } from '../chat-application.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent {
  // ForgotPassword: FormGroup;
  postForm: FormGroup |any;
  hidePassword = true;
  errorMessage:any;
  messageDiv: any;
  b:any;
  c:any;  
  d:any;
ForgotPassword: FormGroup<any>;
  
  constructor(private fb: FormBuilder,private router:Router, private chatService:ChatApplicationService) {
    this.ForgotPassword = new FormGroup({
      Email: new FormControl('', [Validators.required, Validators.email])
    });  
  }
    
  forget(){
    this.chatService.forget(this.ForgotPassword.value).subscribe(
      (result:any)=>{
        var a = Object.values(result);
        alert(a);
       

        // var a =result.data

        var b=Object.values(result.data);
        var c=b.toString();

        var d = localStorage.setItem("a",c)
        
        
        if(result.message=='otp send sucessfully'){ 
          this.router.navigate(['otp'])      
        }
        else{
          const errorMessage = "Email Address Not Matched Please Check..";
      this.messageDiv.nativeElement.innerHTML = errorMessage;
        }
      },  
       
    ) 
  }
  }

