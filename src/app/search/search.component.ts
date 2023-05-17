import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ChatApplicationService } from '../chat-application.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  data:any
  constructor(private chatService:ChatApplicationService, private router:Router){}
  show(){}

  SearchBar = new FormGroup({
  
    FirstName:new FormControl('', [Validators.required])
  })

  ngOnInit(): void {
    this.chatService.search().subscribe((result)=>{
    this.data=result
    
    })
  }

  search() {
  
    this.chatService.search().subscribe(
      (result:any) => {
        console.log(result,"-----")
      
     this.data=result
     const search=JSON.stringify(localStorage.setItem('c',result))
       var data1 = this.SearchBar.value;
       var data2 = Object.values(data1)
    
       var data3 = data2.toString();
              
console.log(this.data,"fetching data");

              if (this.data.includes(data3)) {
          // navigate to another page if result[2] matches firstName
          // this.router.navigate(['contact']);
          console.log("success");
          
        }
        else{
          alert("User does not exist");
          // this.router.navigate(['/']);
          console.log("error");
          
        }
      }
    );
  }
}
