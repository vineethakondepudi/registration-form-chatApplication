import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-opt-generation',
  templateUrl: './opt-generation.component.html',
  styleUrls: ['./opt-generation.component.css']
})
export class OptGenerationComponent {
OTPGeneration: FormGroup;
a:any;
b:any;
data:any;
Email: any;

  constructor(private fb: FormBuilder,private route:Router) {
    this.OTPGeneration = new FormGroup({
      Email: new FormControl('', [Validators.required, Validators.email])
    });
  }
  otp(){
    var b=this.OTPGeneration.value;
    var data= localStorage.getItem("a"); 
    var c=Object.values(b);
    var d=c.toString()
  
if(d==data){
  this.route.navigate(['resetPassword'])
}
   else{
   alert("Please Check Your OTP")
    
   } 
   
    }
}
