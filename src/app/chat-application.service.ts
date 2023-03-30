import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChatApplicationService {
  
  constructor(private http:HttpClient) { }

  registerPost='http://172.17.12.139:8080/register';
  register(data:any){
  return this.http.post(this.registerPost,data)
  };

  loginPost='http://172.17.12.139:8080/login';
  login(data:any){
  return this.http.post(this.loginPost,data)
  };

  forgetPost='http://172.17.12.139:8080/forget';
  forget(data:any){
  return this.http.post(this.forgetPost,data)
  };

  resetPut='http://172.17.12.139:8080/reset';
  reset(data:any){
  return this.http.put(this.resetPut,data)
  };
  
  Searchget='http://172.17.12.139:8080/chatdata';
  search(){
  return this.http.get(this.Searchget)
  };
 
}
