import { Injectable } from "@angular/core";
import * as io from 'socket.io-client';
import { Observable } from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class ChatService {

  socket: io.Socket;;

  constructor() {
  this.socket = io.connect('http://172.17.12.142:3000');
  }
  
  listen(eventname: string) : Observable<any> {
  return new Observable((subscriber) => {
  this.socket.on(eventname, (data:any) => {
    console.log(data,'websocket');
    
  subscriber.next(data);
  })
  })
  }
  
  emit(eventname: string, data: any) {
  this.socket.emit(eventname, data);
  }
}
