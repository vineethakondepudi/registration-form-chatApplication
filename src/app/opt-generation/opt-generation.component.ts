import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
    this.OTPGeneration = this.fb.group({
      Email: ['', Validators.required]
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
    console.log("error");
    
   } 
   
    }
}
