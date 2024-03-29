import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import Pusher from 'pusher-js';
import { ChatService } from 'src/app/data/services/chat/chat.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Messages } from 'src/app/data/models/messages';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css'],
})
export class ChatComponent implements OnInit {
  date;
  chatButton = true;
  show = false;
  message;
  formdata;
  messages: Messages[] = [];
  // chatHeader = 'chat-header-default';
  chatCloseOverlay = 'chat-close-overlay';
  showChatCloseOverlay = false;
  hide = false;
  constructor(private http: HttpClient, private socketService: ChatService) {}

  ngOnInit(): void {
    this.formdata = new FormGroup({
      message: new FormControl(''),
    });
    // Pusher.logToConsole = true;
    // const pusher = new Pusher('', {
    //   cluster: 'eu',
    // });
    // const channel = pusher.subscribe('chat');
    // channel.bind('message', (data: any) => {
    //   this.messages.push(data);
    // });
  }

  submit(data): void {
    // SOCCKET-CLIENT.IO
    if (!this.message) {
      return;
    } else {
      this.date =
        this.padTo2Digits(new Date().getHours()) +
        ':' +
        this.padTo2Digits(new Date().getMinutes());
      this.messages.push({
        date: this.date,
        message: data.message,
      });
      this.socketService.sendMessage(data.message);
      this.socketService.messages.push({
        date: this.date,
        message: data.message,
      });
      this.formdata.reset();
    }
    //PUSHER
    // if (!this.message) {
    //   return;
    // } else {
    //   this.date =
    //     this.padTo2Digits(new Date().getHours()) +
    //     ':' +
    //     this.padTo2Digits(new Date().getMinutes());
    //   console.log(this.date, 'dataa');
    //   this.http
    //     .post('http://localhost:8000/api/messages', {
    //       date: this.date,
    //       message: this.message,
    //     })
    //     .subscribe(() => (this.message = ''));
    // }
  }

  padTo2Digits(num) {
    return String(num).padStart(2, '0');
  }

  openChat() {
    this.show = true;
    this.chatButton = false;
    // socket.io
    this.socketService.setupSocketConnection();
  }

  expandChatCloseOverlay() {
    // this.chatHeader = 'chat-header-after';
    this.showChatCloseOverlay = true;
    this.hide = true;
  }

  closeChat() {
    this.show = !this.show;
    this.chatButton = !this.chatButton;
  }

  cancel() {
    this.showChatCloseOverlay = false;
    this.hide = false;
  }

  close() {
    this.show = !this.show;
  }

  ngOnDestroy() {
    this.socketService.disconnect();
  }
}
