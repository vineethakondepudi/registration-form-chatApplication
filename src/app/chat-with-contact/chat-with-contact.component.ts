import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { ChatApplicationService } from '../chat-application.service';
import { Subject } from 'rxjs';


@Component({
selector: 'app-chat-with-contact',
templateUrl: './chat-with-contact.component.html',
styleUrls: ['./chat-with-contact.component.css']
})
export class ChatWithContactComponent implements OnInit {
selectedNames:any;
loginEmail: any;
searchText = '';
showCard: any;
showDelete:any=[];
selectedName: any;
selectedRegisterName: string[] = [];
savedUsers: string[] = [];
value: any;
filteredUsers: string[] = [];
names: any;
filterRegisterNames:any;
filterSearchNames : any;
select: any;
nameToDelete: string = '';

constructor(private router:Router, private chatService:ChatApplicationService){
 
}


ngOnInit(): void {
   this.loginEmail = localStorage.getItem("email");
  this.chatService.getAllregisteredUsers().subscribe(
    (result: any) => {  
      var getRegsterdNames = result.message;
      getRegsterdNames.forEach((Data: any) => {
       var filterGetRegisterNames = Data.Email.toString().split('@')[0]        
     if(this.loginEmail != filterGetRegisterNames){
          this.filterRegisterNames = filterGetRegisterNames;
          this.selectedRegisterName.push(this.filterRegisterNames);
     }       
      });
      console.log(this.selectedName,'this.filterRegisterNames');
    });
 

  this.chatService.getAllSavedUsers().subscribe((data:any)=>{
    this.showDelete=[]
   var selectedName = data.message;
   selectedName.forEach((ele:any)=>{
   if(this.loginEmail == ele.currentUser){
    this.savedUsers = ele.chatClicked
    this.savedUsers.map(()=>{
      this.showDelete.push(false)
    })
    var receiverNames = this.savedUsers.toString()
    console.log(receiverNames,'receiverNames');
    localStorage.setItem("savedUsers",receiverNames);
    console.log( this.savedUsers,' this.savedUsers');
    
   }
    
   })
  });
  this.router.navigate(['chatWithContact']);
  
}

//searchbar
onSearch() {
  this.filteredUsers = this.selectedRegisterName.filter(name => name.toLowerCase().includes(this.searchText.toLowerCase()));
  if (this.filteredUsers.length > 0) {
    this.filteredUsers = this.filteredUsers.map(user => user.replace('@gmail.com', ''));
  }
}



onSelect(name: string) {
  localStorage.removeItem('selectedName');
  this.searchText = name;
  if (!this.savedUsers.includes(name)) { 
    
  this.savedUsers.push(name);
  this.chatService.postAllSavedUsers({ currentUser: this.loginEmail, chatClicked: this.savedUsers })
  .subscribe((data1: any) => console.log(data1));
  }
  this.selectedNames = name;
  this.searchText=''
  this.filteredUsers=[]
  console.log( this.selectedNames,' this.selectedNames');   
}

selectedNameSubject = new Subject<string>();

selectedNamess(name: string): void {
  this.selectedNameSubject.next(name); 
  console.log(name,'selecttedname');
  
  this.router.navigate(['chatWithContact/chatApplication']);
}




leftAngleIcon(i:number){
  // this.showDelete[i] = !this.showDelete[i]
  this.showDelete.splice(i,1,!this.showDelete[i])
  // console.log("name=============",name);
  // if(this.selectedName == name){
    // this.showDelete != this.showDelete; 
  // }
}


onDelete(name: string) {
  this.searchText = '';
  this.filteredUsers = [];
  if (confirm(`Are you sure you want to delete ${name}?`)) {
    const index = this.savedUsers.indexOf(name);
    if (index > -1) {
      this.savedUsers.splice(index, 1);
      this.chatService.deleteSavedUser(this.loginEmail, name)
        .subscribe((data: any) => {
          console.log(data,'deleted.............');
          if (this.selectedName === name) {
            this.selectedName = null;
          }
          this.loadSavedUsers();
        });
    }
  }
}

loadSavedUsers() {
  if (!this.selectedName) {
    console.log("No selected user.");
    return;
  }
  this.chatService.chatGet()
    .subscribe((data: any) => {

      console.log(data);
    });
}

}