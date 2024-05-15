import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MyFirstService {
  messages: Array<any> = [];

  constructor() {
    this.init();
  }

  init(): void {
    this.insert({
      name: 'Test',
      email: 'test@gmail.com',
      message: 'mesmemsmes',
    });

    this.insert({
      name: 'Test2',
      email: 'test2@gmail.com',
      message: 'tewqesadsa',
    });

    this.insert({
      name: 'Test3',
      email: 'test3@gmail.com',
      message: '3',
    });
  }

  insert(message: { name: string; email: string; message: string }): void {
    this.messages.push(message);
  }

  getAllMessages() {
    console.log(this.messages);
    return this.messages;
  }

  deleteMessage(index: number): void {
    this.messages.splice(index, 1);
  }
}
