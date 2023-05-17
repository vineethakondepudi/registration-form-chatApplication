import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  private permissionGranted = false;

  constructor() { 
    // request permission for notifications
    Notification.requestPermission().then(permission => {
      if (permission === 'granted') {
        this.permissionGranted = true;
      }
    });
  }

  sendNotification(title: string, body: string): void {
    if (this.permissionGranted) {
      const notification = new Notification(title, { body });
      notification.onclick = () => {
        // do something when the notification is clicked
      };
    }
  }
}
