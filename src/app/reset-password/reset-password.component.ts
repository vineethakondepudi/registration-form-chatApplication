import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ChatApplicationService } from '../chat-application.service';


@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent {
  resetRegister:FormGroup;
  hidePassword = true;

  constructor(private fb: FormBuilder,private router:Router,private chatService:ChatApplicationService) {
    this.resetRegister = new FormGroup({
      Email: new FormControl('', [Validators.required, Validators.email]),
          PassWord: new FormControl('', [Validators.required])
    });
  }

  reset(){
    this.chatService.reset(this.resetRegister.value).subscribe(
      (result:any)=>{        
        console.log(result);
                var a = Object.values(result)
                alert(a);
                if(result.message=="Password Updated Sucessfully"){ 
                  this.router.navigate(['login'])      
                }
                else{
                  const errorMessage = "Invalid email or password. Please register.";
                }
              }, 
  )}
    
    
  }







