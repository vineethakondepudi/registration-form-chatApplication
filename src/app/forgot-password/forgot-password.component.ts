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
  constructor(private fb: FormBuilder,private route:Router, private chatService:ChatApplicationService) {
  }

  ForgotPassword = new FormGroup({
  
    Email:new FormControl('', [Validators.required, Validators.email])
  })
 
    
  forget(){
    console.log(this.ForgotPassword.value);    
    this.chatService.forget(this.ForgotPassword.value).subscribe(
      (result:any)=>{
        var d:any;
        d= Object.values(result);
        console.log(result);
        const data=JSON.stringify(localStorage.setItem('a',d))
        if(result.message=="Don't allow"){
          
      }
   else{
    this.route.navigate(['otp']);
        
      }
  })
    
    
    }
  
}

