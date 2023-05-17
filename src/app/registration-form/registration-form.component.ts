import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ChatApplicationService } from '../chat-application.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';



@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent implements OnInit{
  hidePassword = true;
  registrationForm:FormGroup;
  
constructor(private fb: FormBuilder, private chatService:ChatApplicationService,private router:Router, private snackBar: MatSnackBar){

  this.registrationForm = new FormGroup({
    FirstName: new FormControl('', Validators.required),
    LastName: new FormControl('', Validators.required),
    Email: new FormControl('', [Validators.required, Validators.email]),
    PhoneNumber: new FormControl('', [Validators.required, Validators.pattern('[0-9]+')]),
    PassWord: new FormControl('', [Validators.required])
  });  
}
  ngOnInit(): void {
   
  }

hide = true;
get passwordInput() { return this.registrationForm.get('PassWord'); }
  show() {

    this.chatService.register(this.registrationForm.value).subscribe(
      (result:any) => {   
        var a=Object.values(result)
        alert(a);
        if(result.message=='User Sucessfully Registered...! Now You Can Login'){ 
          this.router.navigate(['login'])      
        }
        else{
          const errorMessage = "Invalid email or password. Please register.";
        }
      },
      
      (error) => {
        
      }
    );
    }
    
  }
