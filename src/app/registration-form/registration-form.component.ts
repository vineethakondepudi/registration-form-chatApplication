import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ChatApplicationService } from '../chat-application.service';
import { MatSnackBar } from '@angular/material/snack-bar';



@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent {
  hidePassword = true;
  registrationForm:FormGroup;
  
constructor(private fb: FormBuilder, private chatService:ChatApplicationService, private snackBar: MatSnackBar){

  this.registrationForm = new FormGroup({
    FirstName: new FormControl('', Validators.required),
    LastName: new FormControl('', Validators.required),
    Email: new FormControl('', [Validators.required, Validators.email]),
    PhoneNumber: new FormControl('', [Validators.required, Validators.pattern('[0-9]+')]),
    PassWord: new FormControl('', [Validators.required])
  });  
}

hide = true;
get passwordInput() { return this.registrationForm.get('PassWord'); }
  show() {

    this.chatService.register(this.registrationForm.value).subscribe(
      (result) => {
        console.log(result);
        var a=Object.values(result)
        alert(a)
      },
      
      (error) => {
        // console.log(error);
      }
    );
    }
    
  }
