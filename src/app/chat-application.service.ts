import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatApplicationService {
  
  
  constructor(private http:HttpClient) { }

  //get all registered Users
  registerGet = 'http://172.17.12.142:4000/user'
  getAllregisteredUsers(){
    return this.http.get(this.registerGet)
  }

  //post all registered Users
  registerPost = 'http://172.17.12.142:4000/user';
  register(data: any) {
  const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiY2hpbm5hIiwiaWF0IjoxNjgyNDI5MDAwfQ.7Nz7Ctto4icyHPsl7l5SB1ZUtK2bOJwFHFHYAXwYKpo';
  const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
  return this.http.post(this.registerPost, data, { headers });
  }


  //get selectedUsers
  chatWithContactget='http://172.17.12.142:4000/savedUsers';
  search(){
  return this.http.get(this.chatWithContactget)
  }; 


  private chatUrl = 'http://172.17.12.142:4000/chatData';

  chatPost(data: any): Observable<any> {
   return this.http.post<any>(this.chatUrl, data);
 }
 
 chatGet(): Observable<any> {
   return this.http.get<any>(this.chatUrl);
 }



 //post all saved Users
 postAllSavedUsers(data:any):any{
  return this.http.post('http://172.17.12.142:4000/savedUsers',data)
}

 //get all saved Users
  getAllSavedUsers():any{
    return this.http.get('http://172.17.12.142:4000/savedUsers')
  }


  deleteSavedUser(currentUser: string, chatClicked: string) {
    const url = 'http://172.17.12.142:4000/savedUsers';
    const body = { currentUser: currentUser, chatClicked: chatClicked };
    return this.http.delete(url, { body: body });
  }



// File attachments
 // Returns an observable
 baseApiUrl = 'http://172.17.12.142:4000/chatData';
 upload(file:File): Observable<any> {
  // Create form data
  const formData = new FormData();

  // Store form name as "file" with file data
  formData.append('file', file, file.name);

  // Make http post request over api
  // with formData as req
  return this.http.post(this.baseApiUrl, formData);
}




























































  forgetPost='http://172.17.12.139:8080/forget';
  forget(data:any){
  return this.http.post(this.forgetPost,data)
  };

  resetPut='http://172.17.12.139:8080/reset';
  reset(data:any){
  return this.http.put(this.resetPut,data)
  };
  


  // chatWithContactget='http://172.17.12.139:8080/chatdata';
  // search(){
  // return this.http.get(this.chatWithContactget)
  // };
 
//  loginget='http://172.17.12.139:8080/get';
//  loginGet(){
//   return this.http.get(this.loginget)
//  }



 





}
