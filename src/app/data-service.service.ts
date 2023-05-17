import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {
  constructor(){}

  getDateString(date: Date) {
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const now = new Date();
    const diff = (now.getTime() - date.getTime()) / (1000 * 60 * 60 * 24);
    if (diff < 1) {
      return 'Today';
    } else if (diff < 2) {
      return 'Yesterday';
    } else if (diff < 7) {
      return daysOfWeek[date.getDay()];
    } else {
      const month = date.getMonth() + 1;
      const day = date.getDate();
      const year = date.getFullYear();
      return `${day}/${month}/${year}`;
    }
  }
}