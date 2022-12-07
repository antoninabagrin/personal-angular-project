import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import Pusher from 'pusher-js';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css'],
})
export class ChatComponent implements OnInit {
  date;
  chatButton = true;
  show = false;
  longText =
    'În momentul în care accesaţi chatul de pe Zara.com, confirmaţi că aţi citit şi că înţelegeţi Politica noastră de confidenţialitate şi privind Cookie-urile.';
  message = '';
  messages: string[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    Pusher.logToConsole = true;
    const pusher = new Pusher('f85a22084951a14c4a39', {
      cluster: 'eu',
    });

    const channel = pusher.subscribe('chat');
    channel.bind('message', (data: any) => {
      this.messages.push(data);
    });
  }

  submit(): void {
    if (!this.message) {
      return;
    } else {
      this.date =
        this.padTo2Digits(new Date().getHours()) +
        ':' +
        this.padTo2Digits(new Date().getMinutes());
      console.log(this.date, 'dataa');

      this.http
        .post('http://localhost:8000/api/messages', {
          date: this.date,
          message: this.message,
        })
        .subscribe(() => (this.message = ''));
    }
  }

  padTo2Digits(num) {
    return String(num).padStart(2, '0');
  }

  openChat() {
    this.show = true;
    this.chatButton = false;
  }

  closeChat() {
    this.show = !this.show;
    this.chatButton = !this.chatButton;
  }
}
