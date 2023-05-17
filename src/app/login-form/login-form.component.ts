import { Component} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
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
convertToString:any;
name: any;
loginData : any;
loginFormUser = new BehaviorSubject<string>('');


  constructor(private router:Router, private chatService:ChatApplicationService) {
  this.loginForm = new FormGroup({
    Email: new FormControl('', [Validators.required, Validators.email]),
    PassWord: new FormControl('', [Validators.required])
  });  
} 



show() {  
  const loginEmail = this.loginForm.value.Email;
  const email = loginEmail.split('@')[0];
  localStorage.setItem("email",email);
  this.chatService.getAllregisteredUsers().subscribe(
    (result: any) => {  
      var login = result.message;
    var user=false;
    for(var i=0;i<login.length;i++)
    {
       if(this.loginForm.value.Email == login[i].Email && this.loginForm.value.PassWord == login[i].PassWord)
       {
           if(user=true)
           break;
       }
    }
    if(user)
    {this.router.navigate(['chatWithContact']);
      alert("User Enter The Chat Application")
    }
    else
    {
      alert("Invalid Email or Password. Please Register.");
    }
    });
}
  

   
}
