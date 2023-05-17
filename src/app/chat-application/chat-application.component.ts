import { AfterViewChecked, Component, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ChatApplicationService } from '../chat-application.service';
import { ChatService } from '../chat.service';
import { Subscription } from 'rxjs';
import { ChatWithContactComponent } from '../chat-with-contact/chat-with-contact.component';
import { io } from 'socket.io-client';
import { NotificationService } from '../notification.service';
import { groupBy } from 'lodash';



interface Message {
timestampFormatted: any;
  sender: string;
  receiver: string;
  message: string;
  timestamp: string;
  dateString: string; // new property
  isHovered?: boolean;
  isCardVisible?: boolean;
}

@Component({
  selector: 'app-chat-application',
  templateUrl: './chat-application.component.html',
  styleUrls: ['./chat-application.component.css'],
})
export class ChatApplicationComponent implements AfterViewChecked {
  @ViewChild('chatWindow') chatWindow: any;
  attachmentFile: any = null;
  attachmentloading: boolean = false;
  attachmentShortLink: string = '';
  getMessage: Message[] = [];
  loggedInUserId: string = '';
  message: string = '';
  messages: any = [];
  selectedName: any;
  selectedNames: string[] = [];
  sendMessages: any = '';
  socket: any;
  subscription: Subscription = new Subscription();
  userName: string = '';
  sender_id = localStorage.getItem('email');
  errorMessage: any;
  isCardVisible?: boolean;
  



  constructor(
    private webSocketService: ChatService,
    private chatService: ChatApplicationService,
    private senderComponent: ChatWithContactComponent,
    private notificationService: NotificationService
  ) {
    this.socket = io('http://172.17.12.142:3000');
    this.socket.on('message', (sendMessages: any) => {
      this.messages.push(sendMessages);
    });
    this.loggedInUserId = localStorage.getItem('email') ?? 'default value';
  }
  ngAfterViewChecked(): void {
    this.chatWindow.nativeElement.scrollTop =
      this.chatWindow.nativeElement.scrollHeight;
  }
  SearchBar = new FormGroup({
    FirstName: new FormControl('', [Validators.required]),
  });
  ngOnInit(): void {

   
    this.senderComponent.selectedNameSubject.subscribe(
      (name: string) => {
        this.selectedName = name;
        if (this.selectedName != '') {
          this.fetchMessages();
        }
      }
    );
    this.webSocketService
      .listen('chat')
      .subscribe((data: any) => this.updateMessage(data));
    const storedNames = localStorage.getItem('selectedNames');
    if (storedNames) {
      this.selectedNames = JSON.parse(storedNames);
    }
  }
  ngOnDestroy() {
 
    this.subscription.unsubscribe();
  }

  messageTyping(): void {
    this.webSocketService.emit('typing', this.selectedName);
  }

  formatTimestamp(timestamp: string): string {
  const date = new Date(timestamp);
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const ampm = hours >= 12 ? 'PM' : 'AM';
  const formattedHours = hours % 12 || 12;
  const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
  return `${formattedHours}:${formattedMinutes} ${ampm}`;
}
  fetchMessages() {
    this.chatService.chatGet().subscribe(
      (result) => {
        console.log('Messages retrieved successfully', result);
        let validMessages = result.message.filter((ele: any) => {
          if (
            (ele.receiver == this.selectedName && ele.sender == this.loggedInUserId) ||
            (ele.receiver == this.loggedInUserId && ele.sender == this.selectedName)
          ) {
            console.log(ele, 'ele');
            return ele;
          }
        });
        validMessages.sort(
          (a: any, b: any) =>
            new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()
        );
        this.getMessage = validMessages.reverse().map((message: any) => {
          return {
            ...message,
            timestamp: this.formatTimestamp(message.timestamp),
            dateString: new Date(message.timestamp).toLocaleDateString(),
          };
        });
        const groupedMessages = groupBy(this.getMessage, 'dateString');
        this.messages = Object.keys(groupedMessages).map(dateString => {
          return {
            dateString,
            messages: groupedMessages[dateString],
          };
        });
      },
      (error) => {
        console.error('Error retrieving messages', error);
      }
    );
  }


  

  // update the sendMessage() method
  sendMessage(): void {
    if (this.sendMessages.length>0) {
      const timestamp = new Date().toISOString();
      this.webSocketService.emit('chat', {
        sender: this.sender_id,
        receiver: this.selectedName,
        message: this.sendMessages,
        timestamp: this.formatTimestamp(timestamp),
      });
      const messageData = {
        sender: this.sender_id,
        receiver: this.selectedName,
        message: this.sendMessages,
        timestamp: timestamp,
      };
      this.chatService.chatPost(messageData).subscribe(
        (result) => {
          console.log('Message sent successfully', result);
        },
        (error) => {
          console.error('Error sending message', error);
        }
      );
      this.sendMessages = '';
    } else {
      this.errorMessage = "Can't send empty message.";
      setTimeout(() => {
        this.errorMessage = null;
      }, 3000);
      return;
    }
  }



  updateMessage(data: any) {
    console.log('WebSocketService received data:', data);
    if (!data) return;
    this.getMessage.push(data);
    console.log(this.getMessage, 'getmessage');
    if (data.receiver == this.sender_id) {
      if (this.checkNotificationSupport()) {
        const options = {
          body: `${data.sender}: ${data.message}`,
          icon: 'path/to/notification/icon.png',
        };
        const notification = new Notification('New Message', options);
        notification.onclick = () => {
         
        };
      }
      const audio = new Audio('assetsIncoming Whatsapp Msg - Tone.mp3');
      audio.play();
    }
  }

  checkNotificationSupport(): boolean {
    if (!('Notification' in window)) {
      console.warn('This browser does not support desktop notification');
      return false;
    } else if (Notification.permission === 'granted') {
      return true;
    } else if (Notification.permission !== 'denied') {
      Notification.requestPermission().then(() => {
       
      });
    }
    return false;
  }

  

  // File attachment
  onFileSelected(event: any) {
    const target = event.target as HTMLInputElement;
    if (target.files && target.files.length > 0) {
      const file = target.files[0];
      const allowedTypes = [
        'image/jpeg',
        'image/png',
        'image/gif',
        'application/pdf',
        'application/msword',
        'application/vnd.ms-excel',
      ];
      if (allowedTypes.includes(file.type)) {
        this.attachmentFile = file;
        this.sendMessages = this.attachmentFile.name;
      } else {
        alert('File type not allowed.');
      }
    }
  }

  onUpload() {
    if (this.attachmentFile) {
      this.attachmentloading = true;
      console.log(this.attachmentFile);
    }
  }

  // Emojies

  public isEmojiPickerVisible: boolean = false;
  public addEmoji(event: { emoji: { native: any } }) {
    this.sendMessages = `${this.sendMessages}${event.emoji.native}`;
    this.isEmojiPickerVisible = false;
  }

  toggleCardVisibility(message: Message) {
    message.isCardVisible = !message.isCardVisible;
  
    // Set isCardVisible to false for other messages
    this.messages.forEach((group:any) => {
      group.messages.forEach((msg:any) => {
        if (msg !== message) {
          msg.isCardVisible = false;
        }
      });
    });
  }
  
}
