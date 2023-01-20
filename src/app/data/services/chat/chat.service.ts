import { Injectable } from '@angular/core';
import { io } from 'socket.io-client';
import { environment } from 'src/environments/environment';
import { Messages } from '../../models/messages';

@Injectable({
  providedIn: 'root',
})
export class ChatService {
  messages: Messages[] = [];
  socket;

  constructor() {}

  setupSocketConnection() {
    this.socket = io(environment.SOCKET_ENDPOINT);
    this.socket.on('my broadcast', (data: string) => {
      // console.log(data);
    });
  }

  sendMessage(message: string) {
    this.socket.emit('my message', message);
  }

  disconnect() {
    if (this.socket) {
      this.socket.disconnect();
    }
  }
}
