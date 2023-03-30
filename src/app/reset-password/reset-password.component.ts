import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ChatApplicationService } from '../chat-application.service';


@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent {
  resetRegister:FormGroup;

  constructor(private fb: FormBuilder,private route:Router,private chatService:ChatApplicationService) {
    this.resetRegister = this.fb.group({
      Email: ['', Validators.required],
      PassWord: ['', Validators.required]
    });
  }

  reset(){
    
    
    this.chatService.reset(this.resetRegister.value).subscribe(
      (result:any)=>{        
        console.log(result);
        if(result.message=="Don't allow"){
         
      }
   else{
    this.route.navigate(['login']);
    
        
      }
  })
    
    
  }
}